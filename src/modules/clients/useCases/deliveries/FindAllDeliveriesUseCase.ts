import { prisma } from "../../../../database/prismaClient";

interface IClient {
  id_client: string;
}

export class FindAllDeliveriesUseCase {
  async execute({ id_client }: IClient) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_client,
      },
    });

    return deliveries;
  }
}
