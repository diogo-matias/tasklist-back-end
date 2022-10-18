import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { tasksDB } from "../../database/tasksDB";
import { parseUsers, usersDB } from "../../database/usersDB";
import { User } from "../../models/User";

export default class GetUserController {
  async get(req: Request, res: Response) {
    const { email, password } = req.body;

    return res.json(parseUsers(usersDB));
  }
}
