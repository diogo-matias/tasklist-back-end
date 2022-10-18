import { appendFile } from "fs";
import { Express } from "express";
import GetTasksController from "./controllers/tasks/get-tasks-controller";
import CreateTasksController from "./controllers/tasks/create-task-controller";
import EditTasksController from "./controllers/tasks/edit-task-controller";
import requiredFields from "./middlewares/create-user-middleware";
import CreateUserController from "./controllers/user/create-user-controller";
import LoginController from "./controllers/user/login-users-controller";
import loginMiddleware from "./middlewares/login-middleware";
import createTaskMiddleware from "./middlewares/create-task-middleware";
import editTaskMiddleware from "./middlewares/edit-task-middleware";
import getTasksMiddleware from "./middlewares/get-tasks-middleware";
import DeleteTasksController from "./controllers/tasks/delete-task-controller";
import deleteTaskMiddleware from "./middlewares/delete-task-middleware";
import DeleteMultipleTasksController from "./controllers/tasks/delete-multiple-tasks-controller";
import deleteMultipleTaskskMiddleware from "./middlewares/delete-multiple-tasks-middleware";
import GetUserController from "./controllers/user/get-users-controller";

const getTaskController = new GetTasksController();
const createTaskController = new CreateTasksController();
const editTaskController = new EditTasksController();
const deleteTasksController = new DeleteTasksController();
const createUserController = new CreateUserController();
const loginController = new LoginController();
const deleteMultipleTasksController = new DeleteMultipleTasksController();
const getUserController = new GetUserController();

export default class Routes {
  tasks(app: Express) {
    app.get("/tasks/:user_id", getTasksMiddleware, getTaskController.get);
    app.post(
      "/tasks/:user_id",
      createTaskMiddleware,
      createTaskController.post
    );
    app.put("/tasks/:task_id", editTaskMiddleware, editTaskController.put);
    app.delete(
      "/task/:task_id",
      deleteTaskMiddleware,
      deleteTasksController.delete
    );
    app.post(
      "/tasks/delete/multiple",
      deleteMultipleTaskskMiddleware,
      deleteMultipleTasksController.post
    );
  }

  users(app: Express) {
    app.post("/users", requiredFields, createUserController.post);
    app.post("/users/login", loginMiddleware, loginController.post);
    app.get("/users", getUserController.get);
  }
}
