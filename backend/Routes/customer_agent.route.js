const Jwt = require('jsonwebtoken');
const jwtKey = 'cabkey';

const express = require('express');

const router = express.Router();

const CustomerAgentController = require('../controllers/CustomerAgent.Controller');

router.post('/Customer_Agent_Registration',CustomerAgentController.registerCustomerAgent);
router.get('/get_All_CustomerAgent_Details',CustomerAgentController.SelectAllCustomerAgent);

module.exports = router;