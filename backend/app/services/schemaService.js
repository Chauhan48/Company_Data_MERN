const joi = require('joi');

const joiSchema = {};

joiSchema.addCompanySchema = {
    body: joi.object({
        name: joi.string().required(),
        industry: joi.string().required(),
        location: joi.string().required(),
        founded: joi.number().required(),
        employeeCount: joi.number().required(),
        revenue: joi.number().required(),
    })
}

joiSchema.updateCompanySchema = {
    body: joi.object({
        id: joi.string().required(),
        name: joi.string().required(),
        industry: joi.string().required(),
        location: joi.string().required(),
        founded: joi.number().required(),
        employeeCount: joi.number().required(),
        revenue: joi.number().required(),
    })
}

joiSchema.removeCompanySchema = {
    query: joi.object({
        companyId: joi.string().required()
    })
}

module.exports = joiSchema;