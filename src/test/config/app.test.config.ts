import express, { Application } from "express"
import { routesWrapper } from "../../routes/urls"
import { RentalsController } from "../../controller/controller"
import { RentalDataAccess } from "../mocks/data-access"
import { Rental } from "../../data-access/model"
const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const controller = new RentalsController(new RentalDataAccess(Rental))

app.use( '/rentals', routesWrapper(controller))

export { app }
