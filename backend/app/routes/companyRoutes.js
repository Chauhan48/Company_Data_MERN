const companyController = require('../controller/companyController');

const companyRoutes = require('express').Router();

companyRoutes.post('/add-company', companyController.addCompany);

module.exports = companyRoutes;