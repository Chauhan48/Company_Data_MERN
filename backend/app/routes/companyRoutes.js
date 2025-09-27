const companyController = require('../controller/companyController');
const { schemaValidation } = require('../middleware/schemaValidation');
const joiSchema = require('../services/schemaService');

const companyRoutes = require('express').Router();

companyRoutes.post('/add-company', schemaValidation(joiSchema.addCompanySchema), companyController.addCompany);

companyRoutes.get('/list-companies', companyController.listCompanies);

companyRoutes.delete('/remove-company', schemaValidation(joiSchema.removeCompanySchema), companyController.deleteCompany);

companyRoutes.put('/update-company', schemaValidation(joiSchema.updateCompanySchema), companyController.updateCompany);

module.exports = companyRoutes;