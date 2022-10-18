import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { tasksDB } from "../../database/tasksDB";
import { usersDB } from "../../database/usersDB";
import { User } from "../../models/User";

export default class CreateUserController {
  async post(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = new User(email, password);

    usersDB.push(user);

    return res.json({ success: true, message: "Usuário criado com sucesso" });
  }
}
