import { Request, Response } from "express";
import {
  removeTasksById,
  getTasksByUserId,
  parseTasks,
} from "../../db/tasksDB";
import type { task } from "../../db/tasksDB";
import { TasksRepository } from "../../repositories/tasks.repository";

export default class DeleteMultipleTasksController {
  async post(req: Request, res: Response) {
    const { deleteTask, getTasksByFilters } = new TasksRepository();
    const tasks = req.body;

    const deleteTasksResponse = tasks.map(async (task: task) => {
      return await deleteTask(task.id);
    });

    await Promise.all(deleteTasksResponse);

    const userTasks = await getTasksByFilters(tasks[0].user_id);

    res.json({
      message: "Tasks excluidas com sucesso",
      success: true,
      data: userTasks,
    });
  }
}
