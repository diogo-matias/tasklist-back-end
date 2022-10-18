import { Request, Response } from "express";
import { parseTasks, tasksDB } from "../../database/tasksDB";
import {
  getTasksByUserId,
  getTaskIndexById,
  getTaskById,
} from "../../database/tasksDB";

export default class EditTasksController {
  async put(req: Request, res: Response) {
    const { description, detail } = req.body;
    const { task_id } = req.params;
    const { arquived } = req.query;
    const task = getTaskById(task_id);

    const arquivedBool = arquived === "true" ? true : false;

    task.description = description;
    task.detail = detail;
    task.arquived = arquivedBool;

    const tasks = getTasksByUserId(task.user_id);

    res.json({
      success: true,
      message: "Task editada com sucesso",
      data: parseTasks(tasks),
    });
  }
}
