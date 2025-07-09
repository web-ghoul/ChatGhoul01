import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "webGhoul12345$$$"; 

export const signToken = (payload: object, expiresIn = "1d") => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
