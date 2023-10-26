import { Request, Response, NextFunction } from "express";
import jsonwebtoken from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../utils/utils";

import AuthError from "../errors/authError";
import { RequestWithUser } from "../types/reqWithUser";

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new AuthError("Необходима авторизация"));
  }
  const token = authorization.replace("Bearer ", "");

  try {
    req.user = jsonwebtoken.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    return next(new AuthError("Необходима авторизация"));
  }

  return next();
};
