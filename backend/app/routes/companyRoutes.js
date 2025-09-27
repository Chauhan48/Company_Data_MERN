const companyController = require('../controller/companyController');
const { schemaValidation } = require('../middleware/schemaValidation');
const joiSchema = require('../services/schemaService');

const companyRoutes = require('express').Router();

companyRoutes.post('/add-company', schemaValidation(joiSchema.addCompanySchema), companyController.addCompany);

companyRoutes.get('/list-companies', companyController.listCompanies);

module.exports = companyRoutes;