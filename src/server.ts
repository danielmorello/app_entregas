import express from "express";
//import "express-async-handler";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

//Throw error to the top
//app.use(
//  (err: Error, request: Request, response: Response, next: NextFunction) => {
//    if (err instanceof Error) {
//      return response.status(400).json({ message: err.message });
//    }

//    return response
//      .status(500)
//      .json({ status: "error", message: "Internal server error" });
//  }
//);

app.listen(3333, () => console.log("Server is running..."));
