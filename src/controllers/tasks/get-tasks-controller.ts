import { Request, Response } from "express";
import { parseTasks } from "../../database/tasksDB";

import { tasksDB } from "../../database/tasksDB";
import {
  getTasksByUserId,
  filterByDescription,
  filterByDetail,
} from "../../database/tasksDB";

export default class GetTasksController {
  async get(req: Request, res: Response) {
    const { user_id } = req.params;
    const { description, detail } = req.query;
    const tasks = getTasksByUserId(user_id);
    let response = tasks;

    if (description) {
      response = filterByDescription(response, description.toString());
    }

    if (detail) {
      response = filterByDetail(response, detail.toString());
    }

    return res.json(parseTasks(response));
  }
}
