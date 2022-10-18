import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { getTaskIndexById } from "../database/tasksDB";
import { findUserByEmail, findUserById, usersDB } from "../database/usersDB";

export default function deleteTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { task_id } = req.params;

  const taskIndex = getTaskIndexById(task_id);

  if (taskIndex < 0) {
    return res.json({
      success: false,
      message: "Task não encontrada",
    });
  }

  next();
}
