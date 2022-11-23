import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../db/usersDB";
import { getTaskIndexById } from "../db/tasksDB";
import { TasksRepository } from "../repositories/tasks.repository";

export default function editTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { getTaskByUid } = new TasksRepository();
  const { description, detail } = req.body;
  const { task_id } = req.params;

  const task = getTaskByUid(task_id);

  if (!task) {
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
