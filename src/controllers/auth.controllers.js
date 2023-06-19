import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";

const authController = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const userFound = await User.findOne({ email });
      if (!userFound)
        return res.status(404).json({ message: `Usuario no encontrado` });

      const matchPassword = await User.comparePassword(
        password,
        userFound.password
      );
      if (!matchPassword)
        return res.status(403).json({ message: `Contraseña erronea` });

      const token = await createAccessToken({ id: userFound._id });
      res.cookie("token", token);
      res.json({ success: true, message: "Login exitoso", user: userFound });
    } catch (err) {
      console.log(err);
      return res.status(503).json({ message: err.message, success: false });
    }
  },

  register: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const newObj = new User({
        username,
        email,
        password: await User.encryptPassword(password),
      });
      const query = await newObj.save();
      const token = await createAccessToken({ id: query._id });

      if (newObj) res.cookie("token", token);
      res.json({
        message: `Usuario registrado con éxito`,
        success: true,
        user: query,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message, success: false });
    }
  },

  logout: (req, res) => {
    res.cookie("token", "", { expires: new Date(0) });
    return res.json({ message: `Logout exitoso` });
  },
};

export default authController;
