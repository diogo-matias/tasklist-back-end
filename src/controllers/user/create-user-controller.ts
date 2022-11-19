import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { tasksDB } from "../../db/tasksDB";
import { usersDB } from "../../db/usersDB";
import { User } from "../../models/user";
import { UsersRepository } from "../../repositories/users";

export default class CreateUserController {
  async post(req: Request, res: Response) {
    const { email, password } = req.body;

    const repository = new UsersRepository();

    const user = new User(email, password, name);
    repository.createUser(user);

    usersDB.push(user);

    return res.json({ success: true, message: "Usuário criado com sucesso" });
  }
}
