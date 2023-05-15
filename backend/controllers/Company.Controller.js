const Jwt = require('jsonwebtoken');
const jwtKey = 'cabkey';
const bcrypt = require('bcrypt');

const mongoose = require('mongoose');

const CompanyModule = require('../Models/company.model');

/**
 * API for registration: http://localhost:3000/company/companyregistration
 * {
    "company_name":"urako",
    "owner_name":"Jinuu pet",
    "email":"jinnuuu@company.com",
    "phone_number":"8637415367",
    "city":"surat",
    "state":"1",
    "country":"1",
    "vehicle_details":"abc",
    "bank_details":"abc",
    "gumastadhara_number":"abc",
    "password":"Jinu@123"
}

 * API for retrive data: http://localhost:3000/company/getAllCompanyDetails
 * 
 * API for login: http://localhost:3000/company/login
    
    "email":"jinnuuu@company.com",
    "password":"Jinu@123"
 */

module.exports = {
    registerCompany: async (req, resp, next) => {
        try {
            const company = new CompanyModule(req.body);

            //if (!req.body.company_name || !req.body.owner_name || !req.body.email || !req.body.phone_number || !req.body.city || !req.body.state || !req.body.country || !req.body.vehicle_details || !req.body.bank_details || !req.body.gumastadhara_number || !req.body.username || !req.body.password) {

                //Generate salt to hash the password
                const salt = await bcrypt.genSalt(10);

                //now we set user password to hashed password
                company.password = await bcrypt.hash(company.password, salt);

                checkexists_email = await CompanyModule.findOne({email: req.body.email});

                if(checkexists_email){
                    console.log(JSON.stringify("Email Already exists!"));
                    return resp.send(JSON.stringify("Email Already exists!"));
                }else{
                    let result = await company.save()
    
                    if (result) {
                        return resp.send("Record Inserted Successfully!!");
                    }else{
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

    login: async (req,resp,next) => {
        try{
            if (req.body.email && req.body.password) {
               
                console.log(req.body.email);
                console.log(req.body.password);

                let result = await CompanyModule.findOne({email: req.body.email});
                if (result) {
                    const validpassword = await bcrypt.compare(req.body.password,result.password);

                    if(validpassword)
                    {
                        if(result.flag === 0){
                            console.log("Company status is deactive right now!!");
                            return resp.send(JSON.stringify("Company status is deactive right now!!"));
                        }else{
                            Jwt.sign(
                                { result },
                                jwtKey,
                                { expiresIn: '2h' },
                                    (error, token) => {
                                    if (error) {
                                        return resp.send('something went wrong');
                                    }
                                    resp.send({ result, auth: token,role: result.role });
                                    // localStorage.setItem('token', token);
                                }
                            );
                        }
                    }else{
                        resp.send(JSON.stringify("Invalid Email or Password!"));
                    }
                }else{
                    resp.send(JSON.stringify("User not found"))
                }
            }else{
                return resp.send('Invalid creadential');
            }
        }catch(err){
            console.log(err);
        }
    },

    SelectAllCompany: async (req, resp, next) => {
        try {
            let result = await CompanyModule.find()

            //result = result.json()

            if (result) {
                resp.send(result)
            }
        } catch (err) {
            console.log(err);
        }
    }
}