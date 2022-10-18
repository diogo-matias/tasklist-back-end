import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../database/usersDB";

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const { path } = req;
  const pathExceptions = ["/users/login", "/users"];

  if (pathExceptions.some((exception) => exception === path)) {
    return next();
  }

  const user = findUserById(authorization);

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Erro de autenticação do usuário",
    });
  }

  next();
}
