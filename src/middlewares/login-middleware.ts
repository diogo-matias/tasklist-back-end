import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById } from "../db/usersDB";
import { isEmailValid } from "../utils/email-validade";

export default function loginMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ sucess: false, message: "Preencha todos os campos" });
  }

  if (email.length < 5) {
    return res.status(400).json({
      sucess: false,
      message: "O campo de email precisa ter ao menos 5 caractéres",
    });
  }

  if (password.length < 5) {
    return res.status(400).json({
      sucess: false,
      message: "O campo de password precisa ter ao menos 5 caractéres",
    });
  }

  if (!isEmailValid(email)) {
    return res.status(400).json({
      sucess: false,
      message: "Email inválido",
    });
  }

  next();
}
