import { Request, Response } from "express";
import { AuthentincateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authentincateClientUseCase = new AuthentincateClientUseCase();
    const result = await authentincateClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
