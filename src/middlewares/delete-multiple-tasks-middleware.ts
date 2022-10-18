import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById, usersDB } from "../database/usersDB";

export default function deleteMultipleTaskskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const tasks = req.body;

  if (!tasks) {
    return res
      .status(400)
      .json({ success: false, message: "Tasks não encontradas" });
  }

  const userId = tasks[0]?.user_id || "";

  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "Tasks não encontradas" });
  }

  next();
}
