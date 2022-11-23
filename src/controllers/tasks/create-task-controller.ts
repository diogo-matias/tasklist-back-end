import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { tasksDB } from "../../db/tasksDB";
import { getTasksByUserId, parseTasks } from "../../db/tasksDB";
import { Task } from "../../models/task";
import { TasksRepository } from "../../repositories/tasks.repository";

export default class CreateTasksController {
  async post(req: Request, res: Response) {
    const { detail, description } = req.body;
    const { user_id } = req.params;

    const repository = new TasksRepository();

    const createdTask = await repository.createTask(
      description,
      detail,
      user_id
    );

    res.json({
      message: "Task criada com sucesso",
      success: true,
      data: createdTask,
    });
  }
}
