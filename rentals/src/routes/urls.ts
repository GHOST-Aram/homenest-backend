import { Router } from "express";
import { RentalsController } from "../controller/controller";
import { optionalValidator, rentalPostValidator } from "./input-validation";
import { validator } from "../utils/validator";

const router = Router()

export const routesWrapper = (controller: RentalsController) =>{

    router.post('/:id', controller.respondWithMethodNotAllowed)
    router.post('/', 
        rentalPostValidator,
        validator.handleValidationErrors,
        controller.addNew
    )

    router.get('/:id', 
        validator.validateReferenceId('id'),
        validator.handleValidationErrors,
        controller.getOne
    )

    router.get('/', controller.getMany)

    router.put('/', controller.respondWithMethodNotAllowed)
    router.put('/:id', 
        validator.validateReferenceId('id'),
        rentalPostValidator,
        validator.handleValidationErrors,
        controller.updateOne
    )

    router.patch('/', controller.respondWithMethodNotAllowed)
    router.patch('/:id', 
        validator.validateReferenceId('id'),
        optionalValidator,
        validator.handleValidationErrors,
        controller.modifyOne
    )

    router.delete('/', controller.respondWithMethodNotAllowed)
    router.delete('/:id', 
        validator.validateReferenceId('id'),
        validator.handleValidationErrors,
        controller.deleteOne
    )

    
    return router
}