import { validator } from "../utils/validator";

export const rentalPostValidator = [
    ...validator.validateBedrooms('bedrooms'),
    ...validator.validateImageUrl('imageUrl'),
    ...validator.validateLocation('location'),
    ...validator.validatePrice('price',)
]

export const optionalValidator = [
    validator.validateName('location').optional(),
    validator.validateNumber('bedrooms').optional(),
    validator.validateNumber('price').optional(),
    validator.validateString('imageUrl').optional()
]