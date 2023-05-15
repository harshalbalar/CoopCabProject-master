const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        fist_name:{
            type: String
        },

        last_name:{
            type: String
        },

        date_of_birth:{
            type: Date
        },

        email:{
            type: String
        },

        contact_number:{
            type: Number
        },

        address:{
            type: String
        },

        city:{
            type: String
        },

        state:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_state'}],
            //require: true
        },

        country:{
            type: [{type: mongoose.Schema.Types.ObjectId, ref: 'tbl_country'}],
        },

        postal_code:{
            type: Number
        },

        license_number:{
            type: Number
        },

        license_expire:{
            type: Date
        },

        username: {
            type: String
        },

        password:{
            type: String
        },

        role: {
            type: String
        },

        registration_date:{
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true}
);

const DriverModule = mongoose.model("tbl_driver",schema);
module.exports = DriverModule