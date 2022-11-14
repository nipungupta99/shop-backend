import Joi from "joi";

export const registerValidation = (data) => {
    const schema = Joi.object({
        name : Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/),
    })

    return schema.validate(data)
}

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })
    return schema.validate(data);
}