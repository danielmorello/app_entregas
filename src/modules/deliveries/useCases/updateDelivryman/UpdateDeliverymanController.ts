import { Request, Response } from "express";
import { UpdateDeliverymanUsesCase } from "./UpdateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanUsesCase = new UpdateDeliverymanUsesCase();
    const deliveries = await updateDeliverymanUsesCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(deliveries);
  }
}
