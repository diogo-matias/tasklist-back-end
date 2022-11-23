import { Request, Response } from "express";
import { parseTasks, tasksDB } from "../../db/tasksDB";
import {
  getTasksByUserId,
  getTaskIndexById,
  getTaskById,
} from "../../db/tasksDB";
import { TasksRepository } from "../../repositories/tasks.repository";

export default class EditTasksController {
  async put(req: Request, res: Response) {
    const { updateTask, getTasksByFilters } = new TasksRepository();
    const { description, detail } = req.body;
    const { task_id } = req.params;
    const { arquived } = req.query;
    const arquivedBool = arquived === "true" ? true : false;

    const tasks = await updateTask(task_id, description, detail, arquivedBool);

    res.json({
      success: true,
      message: "Task editada com sucesso",
      data: tasks,
    });
  }
}
