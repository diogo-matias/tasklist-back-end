import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { json } from "stream/consumers";
import { Repository } from "typeorm";
import { tasksDB } from "../../db/tasksDB";
import { usersDB, findUserByEmail, auth } from "../../db/usersDB";
import { UsersRepository } from "../../repositories/users.repository";

export default class LoginController {
  async post(req: Request, res: Response) {
    const repository = new UsersRepository();
    const { email, password } = req.body;

    const user = await repository.findUserByEmailAndPassoword(email, password);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Usuário ou senha inválida" });
    }

    return res.json({ success: true, message: "", user_id: user.uid });
  }
}
