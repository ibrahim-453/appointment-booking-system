import joi from "joi";

const registerSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    phone: joi.string().pattern(/^[0-9]{11}$/)
})

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})

export { registerSchema, loginSchema }