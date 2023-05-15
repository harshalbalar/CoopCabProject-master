const Jwt = require('jsonwebtoken');
const jwtKey = 'cabkey';

const express = require('express');

const router = express.Router();

const CompanyController = require('../controllers/Company.Controller');

router.post('/companyregistration',CompanyController.registerCompany);
router.get('/getAllCompanyDetails',CompanyController.SelectAllCompany);
router.post('/login',CompanyController.login);

module.exports = router;