import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../database/usersDB";
import { getTaskIndexById } from "../database/tasksDB";

export default function editTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { description, detail } = req.body;
  const { task_id } = req.params;

  const index = getTaskIndexById(task_id);

  if (index === -1) {
    return res.json({
      success: false,
      message: "Task não encontrada",
    });
  }

  if (!description) {
    return res.json({
      success: false,
      message: "Descrição inválida",
    });
  }

  next();
}
