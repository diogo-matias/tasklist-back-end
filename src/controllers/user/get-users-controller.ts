import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { tasksDB } from "../../db/tasksDB";
import { parseUsers, usersDB } from "../../db/usersDB";
import { User } from "../../models/user";
import { UsersRepository } from "../../repositories/users.repository";

export default class GetUserController {
  async get(req: Request, res: Response) {
    const repository = new UsersRepository();

    const users = await repository.getAllUsers();
    return res.json(users);
  }
}
