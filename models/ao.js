const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//create a schema
const aOSchema= new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: 'please enter username'
    },

    AOname:{
        type:String,
        unique:true,
        required:'please enter name'
    },

    role :{
    type:String,
    required:'please enter role'
    },
});

aOSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('AO', aOSchema);