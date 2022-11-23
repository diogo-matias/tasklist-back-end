import { Request, Response, NextFunction } from "express";
import { findUserByEmail, findUserById } from "../db/usersDB";
import { isEmailValid } from "../utils/email-validade";

export default function requiredFields(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password, Rpassword, name } = req.body;

  if (!email || !password || !Rpassword || !name) {
    return res
      .status(400)
      .json({ sucess: false, message: "Preencha todos os campos" });
  }

  if (password !== Rpassword) {
    return res
      .status(400)
      .json({ sucess: false, message: "As senhas não conferem" });
  }

  if (findUserByEmail(email)) {
    return res.status(400).json({
      sucess: false,
      message: "Já existe um usuário cadastrado com esse email",
    });
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
