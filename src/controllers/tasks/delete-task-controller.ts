import { Request, Response } from "express";
import { tasksDB, getTaskIndexById, removeTasksById } from "../../db/tasksDB";

export default class DeleteTasksController {
  async delete(req: Request, res: Response) {
    const { task_id } = req.params;
    removeTasksById(task_id);

    res.json({ message: "Task excluida com sucesso", success: true });
  }
}
