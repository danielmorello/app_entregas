import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensuraAuthebticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(400).json({
      message: "Token missing!",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "5385dea0f5c90b2c40228a47d9903301"
    ) as IPayload;

    request.id_deliveryman = sub;

    return next();
  } catch (err) {
    return response.status(400).json({
      message: "Token missing!",
    });
  }
}
