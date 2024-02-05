import { NextFunction, Response, Request } from "express-serve-static-core";
import { HttpResponse, Paginator } from "../z-library/HTTP/http-response";
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
        const rentalId = req.params.id

        try {
            const foundRental = await this.dataAccess.findByReferenceId(rentalId)

            if(foundRental){
                this.respondWithFoundResource(foundRental, res)
            } else{
                this.respondWithNotFound(res)
            }
        } catch (error) {
            next(error)
        }
    }

    public getMany = async(req: Request, res: Response, next: NextFunction) =>{
        const paginator: Paginator = this.paginate(req) 

        try {
            const rentals = await this.dataAccess.findWithPagination(paginator)
            this.respondWithFoundResource(rentals, res)
        } catch (error) {
            next(error)
        }
    }

    public updateOne = async(req: Request, res: Response, next: NextFunction) =>{
        const rentalId = req.params.id
        const updateDoc = req.body

        try {
            const updatedDoc = await this.dataAccess.findByIdAndUpdate(rentalId, 
                updateDoc)

            if(updatedDoc){
                this.respondWithUpdatedResource(updatedDoc.id, res)
            } else{
                const newDoc = await this.dataAccess.createNew(updateDoc)
                this.respondWithCreatedResource(newDoc.id, res)
            }

        } catch (error) {
            next(error)
        }
    }

    public modifyOne = async(req: Request, res: Response, next: NextFunction) =>{

    }

    public deleteOne = async(req: Request, res: Response, next: NextFunction) => {

    }
}