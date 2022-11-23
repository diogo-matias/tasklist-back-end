import { pgHelper } from "../database/pg-helper";
import { TaskEntity } from "../database/entities/task.entity";
import { randomUUID } from "crypto";
import { Like, ObjectID, ObjectIdColumn } from "typeorm";

export class TasksRepository {
  async getTaskByUid(task_uid: string) {
    const task = await TaskEntity.findOne({
      where: {
        uid: task_uid,
      },
    });

    return task;
  }

  async createTask(description: string, detail: string, user_uid: string) {
    const CreatedTasks: TaskEntity = TaskEntity.create({
      uid: randomUUID(),
      description,
      detail,
      user_uid,
      randomColor: Math.floor(Math.random() * 3),
    });
    await CreatedTasks.save();
    return CreatedTasks;
  }

  async getTasksByFilters(
    user_uid: string,
    description?: string,
    detail?: string
  ) {
    const tasks: TaskEntity[] = await TaskEntity.find({
      where: {
        user_uid,
        description: Like(`%${description || ""}%`),
        detail: Like(`%${detail || ""}%`),
      },
    });

    return tasks;
  }

  async deleteTask(task_uid: string) {
    const deletedTask = await TaskEntity.delete({ uid: task_uid });
    return deletedTask;
  }

  async updateTask(
    task_uid: string,
    description?: string,
    detail?: string,
    arquived?: boolean
  ) {
    const updateColumns: {
      description?: string;
      detail?: string;
      arquived?: boolean;
    } = {};

    if (description) updateColumns.description = description;
    if (detail) updateColumns.detail = detail;
    if (arquived) updateColumns.arquived = arquived;

    const task = await TaskEntity.update(
      { uid: task_uid },
      {
        ...updateColumns,
      }
    );

    return task;
  }
}
