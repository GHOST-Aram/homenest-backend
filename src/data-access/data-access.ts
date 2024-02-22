import { Paginator } from "../z-library/HTTP/http-response";
import { Accessible } from "../z-library/bases/accessible";
import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { HydratedRentalDoc, Rental, RentalModel } from "./model";

export class RentalDataAccess extends GenericDataAccess<RentalModel, Rental> {


    constructor(model: RentalModel){
        super(model)
    }

}