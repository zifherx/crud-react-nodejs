import User from "../models/user.model.js";

const userController = {
    getAll: async (req, res) => {
        try {
            //   const query = await User.find({}).select("");
            const query = await User.find({}).select("-password");

            if (query.length == 0) return res.status(404).json({ message: `No existen usuarios` });

            res.json({ success: true, total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message, success: false });
        }
    },
};

export default userController;
