import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    businessName: {
      type: String,
      required: false,
    },
    serviceCategory: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    role:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    phone:{
        type: String,
        required: false
    },
    profilePicture:{
        type: String,
        required: false
    },
    googleId:{
        type: String,
        required: false
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User