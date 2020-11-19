const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//create a schema
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:'please enter name'
    },

    username: {
        type: String,
        unique: true,
        required: 'please enter username'
    },

    role :{
    type:String,
    required:'please enter role'
    },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Users', userSchema);