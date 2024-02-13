import { Model } from "mongoose";
import { Paginator } from "../HTTP/http-response";
import { Accessible } from "./accessible";
import { HydratedDocument } from "mongoose";

export class GenericDataAccess<T extends Model<any>, RawData> implements Accessible {

    public model: T

    constructor(model: T){
        this.model = model
    }
    
    public createNew = (data: RawData)
        : Promise<HydratedDocument<T>> =>{
        return this.model.create(data)
    }

    public findByReferenceId = async(refId: string)
        : Promise<HydratedDocument<T> | null> =>{
        return await this.model.findById(refId)
    }

    public findWithPagination = async(paginator: Paginator)
        : Promise<HydratedDocument<T>[]> => {
        return await this.model.find().skip(paginator.skipDocs)
            .limit(paginator.limit)
    }

    public findByIdAndUpdate = async(id: string, updateDoc: any)
        :Promise<HydratedDocument<T> | null> =>{
        return await this.model.findByIdAndUpdate(id, updateDoc)
    }

    public findByIdAndDelete = async(id: string)
        : Promise<HydratedDocument<T> | null> =>{
        return await this.model.findByIdAndDelete(id)
    }

}