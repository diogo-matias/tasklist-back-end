import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../db/usersDB";

export default function createTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { description, detail } = req.body;
  const { user_id } = req.params;

  const user = findUserById(user_id);

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
