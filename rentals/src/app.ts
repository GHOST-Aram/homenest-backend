import { app } from "./config/config";
import { routesWrapper } from "./routes/urls";
import { RentalsController } from "./controller/controller";
import { RentalDataAccess } from "./data-access/data-access";
import { httpErrors } from "./z-library/HTTP/http-errors";

const dataAccess = new RentalDataAccess()
const controller = new RentalsController(dataAccess)

const routes = routesWrapper(controller)

app.use('/rentals', routes)

app.use(httpErrors.handleUnknownUrls)
app.use(httpErrors.handleServerErrors)