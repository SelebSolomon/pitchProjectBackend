const express = require('express')
const postRouter = require("../controller/postController")
const { identifier } = require('../middlewares/identification')


const route = express.Router()

route.get('/all-post' , postRouter.getPosts)

// route.get('/single-post' ,authController.signin)
// route.post('/create-post',identifier, authController.signout)

// route.put('/update-post', identifier, authController.sendVerificationCode)
// route.delete('/delete-post', identifier, authController.verifyVerificationCode)
// r





module.exports = route