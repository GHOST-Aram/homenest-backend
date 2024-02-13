import { Paginator } from "../z-library/HTTP/http-response";
import { Accessible } from "../z-library/bases/accessible";
import { HydratedRentalDoc, Rental, RentalModel } from "./model";

export class RentalDataAccess implements Accessible {

    public model: RentalModel

    constructor(model: RentalModel){
        this.model = model
    }
    
    public createNew = (data: Rental): Promise<HydratedRentalDoc> =>{
        return this.model.create(data)
    }

    public findByReferenceId = async(refId: string): Promise<HydratedRentalDoc | null> =>{
        return await this.model.findById(refId)
    }
    public findWithPagination = async(paginator: Paginator): Promise<HydratedRentalDoc[]> => {
        return await this.model.find().skip(paginator.skipDocs).limit(paginator.limit)
    }

    public findByIdAndUpdate = async(id: string, updateDoc: any):Promise<HydratedRentalDoc | null> =>{
        return await this.model.findByIdAndUpdate(id, updateDoc)
    }

    public findByIdAndDelete = async(id: string): Promise<HydratedRentalDoc | null> =>{
        return await this.model.findByIdAndDelete(id)
    }

}