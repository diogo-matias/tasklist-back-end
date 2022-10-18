import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { tasksDB } from "../../database/tasksDB";
import { getTasksByUserId, parseTasks } from "../../database/tasksDB";
import { Task } from "../../models/Task";

export default class CreateTasksController {
  async post(req: Request, res: Response) {
    const { detail, description } = req.body;
    const { user_id } = req.params;

    const tasks = getTasksByUserId(user_id);

    const newTask = new Task(description, detail, user_id);

    tasksDB.push(newTask);

    res.json({
      message: "Task criada com sucesso",
      success: true,
      data: parseTasks(tasks),
    });
  }
}