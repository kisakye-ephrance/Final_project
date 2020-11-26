const mongoose = require('mongoose');

//create a schema
const farmerO= new mongoose.Schema({
    name: {
        type:String,
        unique:true,
        required: 'Please Enter first name'
    },

    role:String,
    username:String,
    
    gender: String,

    //password: {
       // type: String,
       // required: 'Please Enter password'
   // },

    



    phonNum:{
        type:String,
        unique:true,
        required:'enter phone number'
    },

    dob:{
        type:String,
        required:'enter the date of birth'
    },

    dor:{
        type:String,
        required:'enter registration date'
    },

    ward:{
        type:String,
        required:'enter ward name'
    },

    nin:{
      type:String,
      unique:true,
      required:'enter ID'
    
    },

    activities: [{type: String}]

    

  });
  
  
    module.exports = mongoose.model('FarmerO', farmerO);