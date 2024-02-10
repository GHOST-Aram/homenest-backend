import { ValidationChain, body } from "express-validator";
import { Validator } from "../z-library/validation/validator";

class RentalsValidator extends Validator{

    public validatePropertyName = (fieldName:string) =>{
        return [
            this.validateName(fieldName),
            this.validateRequiredField(fieldName)
        ]
    }

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
            this.validateString(fieldName).notEmpty().withMessage
                ('Image url is required')
        ]
    }

    public validateString = (fieldName: string): ValidationChain =>{
        return body(fieldName).isString()
    }

    public validateArray = (fieldName: string): ValidationChain =>{
        return body(fieldName).isArray()
    }
}

export const validator = new RentalsValidator()