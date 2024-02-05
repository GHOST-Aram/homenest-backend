import { ValidationChain, body } from "express-validator";
import { Validator } from "../z-library/validation/validator";

class RentalsValidator extends Validator{
    public validateLocation = (fieldName: string): ValidationChain[] =>{
        
        return [
            this.validateName(fieldName), 
            this.validateRequiredField(fieldName)
        ]
    }

    public validateBedrooms = (fieldName: string): ValidationChain[] =>{

        return [
            this.validateNumber(fieldName),
            this.validateRequiredField(fieldName)
        ]
    }


    public validatePrice = (fieldName: string): ValidationChain[] => {
        return [
            this.validateNumber(fieldName),
            this.validateRequiredField(fieldName)
        ]
    }

    public validateImageUrl = (fieldName: string): ValidationChain[] => {
        return [
            this.validateString(fieldName),
            this.validateRequiredField(fieldName)
        ]
    }

    public validateString = (fieldName: string): ValidationChain =>{
        return body(fieldName).isString()
    }
}

export const validator = new RentalsValidator()