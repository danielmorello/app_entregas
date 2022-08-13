import { prisma } from "../../../../database/prismaClient";

interface IDeliveryman {
  id_deliveryman: string;
}

export class FindAllDeliveriesDeliverymanUseCase {
  async execute({ id_deliveryman }: IDeliveryman) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_deliveryman,
      },
    });

    return deliveries;
  }
}
