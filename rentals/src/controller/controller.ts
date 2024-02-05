import { NextFunction, Response, Request } from "express-serve-static-core";
import { HttpResponse } from "../z-library/HTTP/http-response";
import { Controllable } from "../z-library/bases/controllable";
import { RentalDataAccess } from "../data-access/data-access";

export class RentalsController extends HttpResponse implements Controllable{

    private dataAccess: RentalDataAccess

    constructor(dataAccess: RentalDataAccess){
        super()
        this.dataAccess = dataAccess
    }

    public addNew = async(req: Request, res: Response, next: NextFunction) =>{
        const rentalData = req.body

        try {
            const createdRental = await this.dataAccess.createNew(rentalData)
            this.respondWithCreatedResource(createdRental.id, res)
        } catch (error) {
            next(error)
        }   
    }

    public getOne = async(req: Request, res: Response, next: NextFunction) =>{

    }

    public getMany = async(req: Request, res: Response, next: NextFunction) =>{

    }

    public updateOne = async(req: Request, res: Response, next: NextFunction) =>{

    }

    public modifyOne = async(req: Request, res: Response, next: NextFunction) =>{

    }

    public deleteOne = async(req: Request, res: Response, next: NextFunction) => {

    }
}