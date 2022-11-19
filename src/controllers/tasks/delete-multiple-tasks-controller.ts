import { Request, Response } from "express";
import {
  removeTasksById,
  getTasksByUserId,
  parseTasks,
} from "../../db/tasksDB";
import type { task } from "../../db/tasksDB";

export default class DeleteMultipleTasksController {
  async post(req: Request, res: Response) {
    const tasks = req.body;

    tasks.map((task: task) => {
      removeTasksById(task.id);
    });

    const userTasks = getTasksByUserId(tasks[0].user_id);

    res.json({
      message: "Tasks excluidas com sucesso",
      success: true,
      data: parseTasks(userTasks),
    });
  }
}
