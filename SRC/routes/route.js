const express = require('express')
const authController = require('../controller/authController')
const { identifier } = require('../middlewares/identification')


const route = express.Router()

route.post('/signUp' , authController.signup)
route.post('/signin' ,authController.signin)
route.post('/signout',identifier, authController.signout)

route.patch('/send-verification-code', identifier, authController.sendVerificationCode)
route.patch('/verify-verification-code', identifier, authController.verifyVerificationCode)
route.patch('/change-password', identifier, authController.changePassword)


route.patch('/send-forgot-password-code',  authController.sendForgotPasswordCode)
route.patch('/verify-forgot-password-code', authController.verifyForgotPasswordCode)





module.exports = route