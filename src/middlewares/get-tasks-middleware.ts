import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../db/usersDB";
import { UsersRepository } from "../repositories/users.repository";

export default function getTasksMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { findUserByPk } = new UsersRepository();
  const { user_id } = req.params;

  const user = findUserByPk(user_id);

  if (!user) {
    return res.json({
      success: false,
      message: "Usuário não encontrado",
    });
  }

  next();
}
