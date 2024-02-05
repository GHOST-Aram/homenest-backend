import { Paginator } from "../z-library/HTTP/http-response";
import { Accessible } from "../z-library/bases/accessible";
import { HydratedRentalDoc, Rental } from "./model";

export class RentalDataAccess implements Accessible {
    
    public createNew = (data: Rental): Promise<HydratedRentalDoc> =>{
        return Rental.create(data)
    }

    public findByReferenceId = async(refId: string): Promise<HydratedRentalDoc | null> =>{
        return await Rental.findById(refId)
    }
    public findWithPagination = async(paginator: Paginator): Promise<HydratedRentalDoc[]> => {
        return await Rental.find().skip(paginator.skipDocs).limit(paginator.limit)
    }

    public findByIdAndUpdate = async(id: string, updateDoc: any):Promise<HydratedRentalDoc | null> =>{
        return await Rental.findByIdAndUpdate(id, updateDoc)
    }

    public findByIdAndDelete = async(id: string): Promise<HydratedRentalDoc | null> =>{
        return await Rental.findByIdAndDelete(id)
    }

}