import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { getTaskIndexById } from "../db/tasksDB";
import { findUserByEmail, findUserById, usersDB } from "../db/usersDB";
import { TasksRepository } from "../repositories/tasks.repository";

export default async function deleteTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { task_id } = req.params;
  const { getTaskByUid } = new TasksRepository();

  const task = await getTaskByUid(task_id);

  if (!task) {
    return res.json({
      success: false,
      message: "Task não encontrada",
    });
  }

  next();
}
