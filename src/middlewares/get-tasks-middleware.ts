import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../database/usersDB";

export default function getTasksMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req.params;

  if (!findUserById(user_id)) {
    return res.json({
      success: false,
      message: "Usuário não encontrado",
    });
  }

  next();
}
