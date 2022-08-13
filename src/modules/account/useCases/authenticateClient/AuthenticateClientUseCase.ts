import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthentincateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const client = await prisma.clients.findUnique({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error("Username or Password invalid");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Username or Password invalid");
    }

    const token = sign({ username }, "5385dea0f5c90b2c40228a47d9903301", {
      subject: client.id,
      expiresIn: "1d",
    });

    return token;
  }
}
