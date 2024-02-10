import { HydratedDocument, Model, Schema, model } from "mongoose";

export interface Rental{
    propertyName: string
    imageUrl: string
    rentPerMonth: number
    rentPerYear: number,
    location: string
    bedrooms: number
    bathrooms: number
    description: string
    agentId: string
    squareFootage: number

}

export type RentalModel = Model<Rental>

const rentalSchema = new Schema<Rental, RentalModel>({
    propertyName: {
        type: String,
        required: true
    },

    rentPerMonth: {
        type: Number,
        required: true
    },

    rentPerYear: {
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

    bathrooms: {
        type: Number,
        require: true
    },

    imageUrl:{
        type: String,
        required: true
    },

    description: { 
        type: String,
        required: true
    },

    agentId: {
        type: String,
        required: true,
    },

    squareFootage:{
        type: Number,
        required: true
    }
})

export type HydratedRentalDoc = HydratedDocument<Rental>

export const Rental: RentalModel =  model<Rental, RentalModel>(
    'Rental', rentalSchema
)