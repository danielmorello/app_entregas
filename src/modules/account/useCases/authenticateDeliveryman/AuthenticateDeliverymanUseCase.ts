import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthentincateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Username or Password invalid");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or Password invalid");
    }

    const token = sign({ username }, "5385dea0f5c90b2c40228a47d9903301", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return token;
  }
}
