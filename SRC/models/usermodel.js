const { required } = require('joi')
const { verify } = require('jsonwebtoken')
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        max: 300,
        min: 5,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false,

    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        select: false,
    },
    verificationCodeValidation: {
        type: String,
        select: false,
    },
    forgotPasswordCode: {
        type: String,
        select: false,
    },
    forgotPasswordCodeValidation: {
        type: String,
        select: false,
    },
    created_at: {type: Date, default:Date.now}

},
   { timestamps: true}
)

module.exports = mongoose.model('User', userSchema)