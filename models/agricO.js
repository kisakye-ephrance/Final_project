const mongoose = require('mongoose');

//create a schema
const agricO= new mongoose.Schema({
    FOname: {
        type:String,
        unique:true,
        required: 'Please Enter first name'
    },
    
    gender: String,

    //password: {
       // type: String,
       // required: 'Please Enter password'
   // },

    FOemail:{
        type:String,
        unique:true,
        required:'please enter email'
    },

    foNum:{
      type:String,
      unique:true,
      required:'please fill in the unique farmer one number'
    },


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
    
    }
    ,
    stayPeriod:{
        type:String,
        required:'enter stay period'
    },

    residence:{
        type:String,
        required:'enter residence type'
    },

    //activities:{
     // type:String,
   // required:'please enter activities'
    //}

  });
  
  
    module.exports = mongoose.model('AgricO', agricO);