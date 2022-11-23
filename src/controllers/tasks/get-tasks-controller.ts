import { Request, Response } from "express";
import { parseTasks } from "../../db/tasksDB";

import { tasksDB } from "../../db/tasksDB";
import {
  getTasksByUserId,
  filterByDescription,
  filterByDetail,
} from "../../db/tasksDB";
import { TasksRepository } from "../../repositories/tasks.repository";

export default class GetTasksController {
  async get(req: Request, res: Response) {
    const { getTasksByFilters } = new TasksRepository();
    const { user_id } = req.params;
    const { description, detail } = req.query;

    const tasks = await getTasksByFilters(
      user_id,
      description as string,
      detail as string
    );

    return res.json(tasks);
  }
}
