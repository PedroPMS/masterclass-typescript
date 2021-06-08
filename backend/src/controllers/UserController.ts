import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Pedro", email: "emailtop@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Pedro",
        email: "email@gmail.com",
      },
      message: {
        subject: "Bem-vindo ao sistema",
        body: "Parabéns, vc fez seu cadastro",
      },
    });
    return res.send();
  },
};
