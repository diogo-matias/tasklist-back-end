import { Task } from "../models/Task";

export interface task {
  id: string;
  description: string;
  detail: string;
  user_id: string;
  arquived?: boolean;
  randomColor?: number;
}

export const tasksDB: Task[] = [];

export function removeTasksById(task_id: string) {
  const index = getTaskIndexById(task_id);

  tasksDB.splice(index, 1);
}
1;

export function getTaskById(task_id: string) {
  return tasksDB.find((task) => task.id === task_id);
}

export function getTasksByUserId(user_id: string) {
  const tasks = tasksDB.filter((task) => task.user_id === user_id);
  return tasks;
}

export function filterByDescription(tasks: Task[], description: string) {
  const response = tasks.filter((task) =>
    task.description.toLowerCase().includes(description.toLowerCase())
  );
  return response;
}
export function filterByDetail(tasks: Task[], detail: string) {
  const response = tasks.filter((task) =>
    task.detail.toLowerCase().includes(detail.toLowerCase())
  );
  return response;
}

export function getTaskIndexById(task_id: string) {
  const index = tasksDB.findIndex((task) => task.id === task_id);

  return index;
}

export function parseTasks(tasks: Task[]) {
  const response = tasks.map((task) => {
    return task.parseKeys();
  });
  return response;
}
