import * as joi from "joi"

export const authenticationSchema = joi.object({
    phone: joi.string().required(),
    password: joi.string().required()
})