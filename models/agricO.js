const mongoose = require('mongoose');


//create a schema
const agricOSchema= new mongoose.Schema({
    name: {
        type:String,
        unique:true,
        required: 'Please Enter first name'
    },
    username:{
        type:String,
        unique:true,
        required:'please enter user name'
    },
    role:String,
    gender: String,

    //password: {
       // type: String,
       // required: 'Please Enter password'
   // },

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
  
    
    module.exports = mongoose.model('AgricO', agricOSchema);