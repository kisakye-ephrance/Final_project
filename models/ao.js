const mongoose = require('mongoose');

//create a schema
const aoSchema= new mongoose.Schema({
    name: {
        type:String,
        unique:true,
        required: 'Please Enter first name'
    },

    role:String,
    username:String,
    
    

    

    

    
  });
  
  
    module.exports = mongoose.model('AO', aoSchema);