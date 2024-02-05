import { HydratedDocument, Model, Schema, model } from "mongoose";

export interface Rental{
    imageUrl: string
    price: number
    location: string
    bedrooms: number
}

export type RentalModel = Model<Rental>

const rentalSchema = new Schema<Rental, RentalModel>({
    price: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    bedrooms: {
        type: Number,
        required: true
    },

    imageUrl:{
        type: String,
        required: true
    }
})

export type HydratedRentalDoc = HydratedDocument<Rental>

export const Rental: RentalModel =  model<Rental, RentalModel>(
    'Rental', rentalSchema
)