const Joi = require('joi')

const departmentValidation = Joi.object({
    name:Joi.string().required(),
    faculty:Joi.string().required()
})

const courseValidation = Joi.object({
    courseCode:Joi.string().required(),
    title:Joi.string().required(),
    creditUnits:Joi.number().required(),
    department:Joi.string().required()
})

module.exports = { departmentValidation, courseValidation }