const Jwt = require('jsonwebtoken');
const jwtKey = 'cabkey';
const bcrypt = require('bcrypt');

const CustomerAgentModule = require('../Models/customeragent.model');

module.exports = {
    registerCustomerAgent: async (req, resp, next) => {
        try {
            const customer_agent = new CustomerAgentModule(req.body);

            //if (!req.body.company_name || !req.body.owner_name || !req.body.email || !req.body.phone_number || !req.body.city || !req.body.state || !req.body.country || !req.body.vehicle_details || !req.body.bank_details || !req.body.gumastadhara_number || !req.body.username || !req.body.password) {

            //Generate salt to hash the password
            const salt = await bcrypt.genSalt(10);

            //now we set user password to hashed password
            customer_agent.password = await bcrypt.hash(customer_agent.password, salt);

            checkexists_email = await CustomerAgentModule.findOne({ email: req.body.email });

            if (checkexists_email) {
                console.log(JSON.stringify("Email Already exists!"));
                return resp.send(JSON.stringify("Email Already exists!"));
            } else {
                let result = await customer_agent.save();

                if (result) {
                    return resp.send("Record Inserted Successfully!!");
                } else {
                    return resp.send("Problem while register the company!!");
                }
            }
            // }else{
            //     return resp.send("Please provide all the details!!");
            // }

        } catch (err) {
            console.log(err);
        }
    },

    SelectAllCustomerAgent: async (req, resp, next) => {
        try {
            let result = await CustomerAgentModule.find()

            //result = result.json()

            if (result) {
                resp.send(result)
            }
        } catch (err) {
            console.log(err);
        }
    }
}