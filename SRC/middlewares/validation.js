const joi = require('joi')


exports.signupSchema = joi.object({
    email: joi.string().required().email({
        tlds: {allow: ['com' , 'net', 'org']}
    }),
    password: joi.string().required().pattern(new RegExp('^.*$'))
})


exports.signinSchema = joi.object({
    email: joi.string().required().email({
        tlds: {allow: ['com' , 'net', 'org']}
    }),
    password: joi.string().required().pattern(new RegExp('^.*$'))
})

exports.acceptCodeSchema = joi.object({
    email: joi.string().required().email({
        tlds: {allow: ['com' , 'net', 'org']}
    }),
   providedCode: joi.number().required()
})

exports.changePasswordSchema = joi.object({
    newPassword: joi.string().required().pattern(new RegExp('^.*$')),
    oldPassword: joi.string().required().pattern(new RegExp('^.*$'))

})

exports.acceptEPCodeSchema = joi.object({

    email: joi.string().required().email({
        tlds: {allow: ['com' , 'net', 'org']}
    }),
   providedCode: joi.number().required(),
   newPassword: joi.string().required().pattern(new RegExp('^.*$')),

})

