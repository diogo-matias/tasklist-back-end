import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { json } from "stream/consumers";
import { tasksDB } from "../../database/tasksDB";
import { usersDB, findUserByEmail, auth } from "../../database/usersDB";

export default class LoginController {
  async post(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = auth(email, password);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Usuário ou senha inválida" });
    }

    return res.json({ success: true, message: "", user_id: user.id });
  }
}
