import { HydratedRentalDoc } from "../../data-access/model";
import { Rental } from "../../data-access/model";
import { Paginator } from "../../z-library/HTTP/http-response";
import { jest } from "@jest/globals";
import { Accessible } from "../../z-library/bases/accessible";
import { rentalData } from "./raw-document";

const AVAILABLE_ID = '64c9e4f2df7cc072af2ac9e4'

export class RentalDataAccess implements Accessible{

    public createNew = jest.fn(async(data: Rental): Promise<HydratedRentalDoc> =>{
        return new Rental(data)
    })

    public findByReferenceId = jest.fn(async(refId: string): Promise<HydratedRentalDoc | null> =>{
        return refId === AVAILABLE_ID ? new Rental(rentalData) : null
    })

    public findWithPagination = jest.fn(async(paginator: Paginator): Promise<HydratedRentalDoc[]> => {
       return createFakeRentalDocs(paginator.limit)
    })

    public findByIdAndUpdate = jest.fn(async(id: string, updateDoc: any):Promise<HydratedRentalDoc | null> =>{
        return id === AVAILABLE_ID ? new Rental(rentalData) : null
    })

    public findByIdAndDelete = jest.fn(async(id: string): Promise<HydratedRentalDoc | null> =>{
        return id === AVAILABLE_ID ? new Rental(rentalData) : null
    })

}

const createFakeRentalDocs = (limit: number): HydratedRentalDoc[] =>{
    const rentals: HydratedRentalDoc[] = []

    while(limit > 0){
        rentals.push(new Rental(rentalData))
        limit --
    }

    return rentals
}