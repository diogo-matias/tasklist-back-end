import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../db/usersDB";
import { UsersRepository } from "../repositories/users.repository";

export default function createTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { findUserByPk } = new UsersRepository();
  const { description, detail } = req.body;
  const { user_id } = req.params;

  const user = findUserByPk(user_id);

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Usuário não encontrado",
    });
  }

  if (!description) {
    return res.status(400).json({
      success: false,
      message: "Informe uma descrição",
    });
  }

  next();
}
