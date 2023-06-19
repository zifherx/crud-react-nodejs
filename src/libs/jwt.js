import jwt from "jsonwebtoken";
import { variables } from "../config.js";

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            variables.TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
}

export function verifyToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.verify(payload, variables.TOKEN_SECRET, (err, decoded) => {
            if (err) reject(err);
            resolve(decoded);
        });
    });
}
