import mongoose from "mongoose";

const professionalUserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    serviceCategory: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    },
    googleId: {
        type: String,
        required: false
    }
},{timestamps: true})

export const ProfessionalUser = mongoose.model('ProfessionalUser', professionalUserSchema)