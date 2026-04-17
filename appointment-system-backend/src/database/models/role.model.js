import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: ['user', 'professional', 'admin', 'super_admin']
    },
    
    description: {
        type: String,
        required: true
    }
},
{ timestamps: true}
)

const Role = mongoose.model('Role', roleSchema)

export default Role