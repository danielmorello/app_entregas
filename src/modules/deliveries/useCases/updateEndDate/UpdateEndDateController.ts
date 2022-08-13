import { Request, Response } from "express";
import { UpdateEndDateUsesCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateEndDateUsesCase = new UpdateEndDateUsesCase();
    const deliveries = await updateEndDateUsesCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(deliveries);
  }
}
