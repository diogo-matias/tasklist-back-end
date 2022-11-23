import { Request, Response } from "express";
import { tasksDB, getTaskIndexById, removeTasksById } from "../../db/tasksDB";
import { TasksRepository } from "../../repositories/tasks.repository";

export default class DeleteTasksController {
  async delete(req: Request, res: Response) {
    const { deleteTask } = new TasksRepository();
    const { task_id } = req.params;
    const deletedTasks = await deleteTask(task_id);

    res.json({
      message: "Task excluida com sucesso",
      success: true,
      data: deletedTasks,
    });
  }
}
