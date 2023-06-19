import { verifyToken } from "../libs/jwt.js";

export const authRequired = async (req, res, next) => {
    const { token } = req.cookies;
    // console.log(token);
    if (!token) return res.status(401).json({ message: `Token no encontrado, acceso denegado` });

    const tokenVerify = await verifyToken(token);
    if (!tokenVerify) return res.status(403).json({ message: `Token inválido` });

    req.user = tokenVerify.id;

    next();
};
