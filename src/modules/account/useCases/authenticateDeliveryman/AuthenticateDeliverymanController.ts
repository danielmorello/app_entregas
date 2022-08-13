import { Request, Response } from "express";
import { AuthentincateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authentincateDeliverymanUseCase =
      new AuthentincateDeliverymanUseCase();
    const result = await authentincateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
