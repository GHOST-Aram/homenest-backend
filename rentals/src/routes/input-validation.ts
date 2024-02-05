import { validator } from "../utils/validator";

export const rentalPostValidator = [
    ...validator.validateBedrooms('bedrooms'),
    ...validator.validateImageUrl('imageUrl'),
    ...validator.validateLocation('location'),
    ...validator.validatePrice('price',)
]