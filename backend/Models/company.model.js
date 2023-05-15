const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        company_name:{
            type: String,
            required: [true, 'Company Name is required']
        },

        owner_name:{
            type: String,
            required: [true, 'Owner Name is required']
        },

        email:{
            type: String,
            //required: [true, 'Owner Name is required']
        },

        phone_number:{
            type: Number,
            //required: [true, 'Company's contact number is required']
        },

        city:{
            type: String,
            //require: true
        },

        state:{
            type: String,
            //required: [true, 'State details is required']
        },

        country:{
            type: String,
            //required: [true, 'Country details is required']
        },

        vehicle_details:{
            type: String,
            //required: [true, 'Vehicle details is required']
        },

        bank_details:{
            type: String,
            //required: [true, 'Bank details is required']
        },

        gumastadhara_number:{
            type: String,
            //required: [true, 'Gumastadhara details is required']
        },

        password:{
            type: String
        },

        registerd_date:{
            type: Date,
            default: Date.now()
        },

        flag:{
            type: Number,
            default: 1
        }
    },
    {timestamps: true}
);

const CompanyModule = mongoose.model('tbl_company',schema);
module.exports = CompanyModule;