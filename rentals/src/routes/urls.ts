import { Router } from "express";
import { RentalsController } from "../controller/controller";
import { rentalPostValidator } from "./input-validation";
import { validator } from "../utils/validator";

const router = Router()

export const routesWrapper = (controller: RentalsController) =>{

    router.post('/:id', controller.respondWithMethodNotAllowed)
    router.post('/', 
        rentalPostValidator,
        validator.handleValidationErrors,
        controller.addNew
    )
    
    return router
}