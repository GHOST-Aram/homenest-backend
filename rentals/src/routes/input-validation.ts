import { validator } from "../utils/validator";

export const rentalPostValidator = [
    validator.validateName('propertyName'),
    validator.validateRequiredField('propertyName'),

    validator.validateNumberField('bedrooms'),
    validator.validateRequiredField('bedrooms'),

    ...validator.validateImageUrl('backgroundImageUrl'),

    validator.validateString('description'),
    validator.validateRequiredField('description'),

    validator.validateObjectId('agentId'),
    validator.validateRequiredField('agentId'),
    
    ...validator.validateLocation('locationName'),
    ...validator.validatePrice('rentPerMonth'),
    ...validator.validatePrice('rentPerYear'),
    validator.validateNumberField('bathrooms'),
    validator.validateRequiredField('bathrooms'),

    validator.validateNumberField('squareFootage'),
    validator.validateRequiredField('squareFootage'),






]

export const optionalValidator = [
    validator.validateName('location').optional(),
    validator.validateNumber('bedrooms').optional(),
    validator.validateNumber('price').optional(),
    validator.validateString('imageUrl').optional()
]