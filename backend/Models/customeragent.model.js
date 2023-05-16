const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        company_name:{
            type: String
        },

        brand_name:{
            type: String
        },

        owner_name:{
            type: String
        },

        mobile_number:{
            type: Number
        },

        email:{
            type: String
        },

        city:{
            type: String
        },

        state:{
            type: String
        },

        country:{
            type: String
        },

        gst_number:{
            type: Number
        },

        gumastadhara_number:{
            type: Number
        },

        company_pancard:{
            type: Number
        },

        owner_adharcard:{
            type: Number
        },

        owner_pancard:{
            type: Number
        },

        company_address:{
            type: String
        },

        password:{
            type: String
        },

        registerd_date:{
            type: Date,
            default: Date.now()
        }
    },
    {timestamps: true}
);

const CustomerAgentModule = mongoose.model('tbl_customer_agent',schema);
module.exports = CustomerAgentModule;