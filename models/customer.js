const mongoose = require('mongoose');

//create a schema
const customerSchema= new mongoose.Schema({

    name:{
        type: String,
    },

    phonNum : {
        type: String,
    },

    mail:{
        type: String,
    },

    dob: {
        type: String,
    },

    faname: {
        type: String,
    },

    pname:{
        type: String
    },

    quantity:{
        type: String
    } ,

    dod: {
        type: String
    },

    modeofpayment: {
        type:String
    },

    modeofdelivery: {
        type: String
    },

});

module.exports = mongoose.model('Customer', customerSchema);