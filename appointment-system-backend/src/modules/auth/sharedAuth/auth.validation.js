import joi from 'joi'

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
})

const refreshTokenSchema = joi.object({
    refreshToken: joi.string().required()
})

export { loginSchema, refreshTokenSchema }