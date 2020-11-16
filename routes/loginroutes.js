const express = require('express');
const router = express.Router();

//require passport
const passport = require('passport');

//signin form
router.get('/', (req,res)=>{
   res.render("signinagric")
});





module.exports = router;