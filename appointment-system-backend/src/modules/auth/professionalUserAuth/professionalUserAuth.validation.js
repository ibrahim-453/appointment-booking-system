import joi from 'joi'

const registerProfessionalSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    businessName: joi.string().required(),
    serviceCategory: joi.string().required(),
    experience: joi.string().required(),
    phone: joi.string().pattern(/^[0-9]{11}$/).optional(),
})

export { registerProfessionalSchema }