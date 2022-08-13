import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { CreateDeliveriesController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveriesController";
import { ensuraAuthebticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensuraAuthebticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDelivryman/UpdateDeliverymanController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);
routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post(
  "/delivery",
  ensuraAuthebticateClient,
  createDeliveriesController.handle
);
routes.get(
  "/delivery/available",
  ensuraAuthebticateDeliveryman,
  findAllAvailableController.handle
);
routes.put(
  "/delivery/updateDeliveryman/:id",
  ensuraAuthebticateDeliveryman,
  updateDeliverymanController.handle
);
routes.get(
  "/client/deliveries",
  ensuraAuthebticateClient,
  findAllDeliveriesController.handle
);
routes.get(
  "/deliveryman/deliveries",
  ensuraAuthebticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);
routes.put(
  "/delivery/updateEndDate/:id",
  ensuraAuthebticateDeliveryman,
  updateEndDateController.handle
);

export { routes };
