const mongoose = require('mongoose');

//create a schema
const ufarmerSchema= new mongoose.Schema({

    upload:{
        type: String,
    },

    pname : {
        type: String,
    },

    ward: String,
    dou: String,
    price: String,
    quantity: String,

    producttype: String,

});

module.exports = mongoose.model('Ufarmer', ufarmerSchema);