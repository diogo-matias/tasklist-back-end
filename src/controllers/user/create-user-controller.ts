import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { tasksDB } from "../../db/tasksDB";
import { usersDB } from "../../db/usersDB";
import { User } from "../../models/user";
import { UsersRepository } from "../../repositories/users.repository";

export default class CreateUserController {
  async post(req: Request, res: Response) {
    const { email, password, name } = req.body;

    const repository = new UsersRepository();

    const user = await repository.createUser(email, password, name);

    // usersDB.push(user);

    return res.json({
      success: true,
      message: "Usuário criado com sucesso",
      user,
    });
  }
}
