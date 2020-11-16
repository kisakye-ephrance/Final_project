const express = require('express');
const router = express.Router();

//require passport
const passport = require('passport');

//signin form
router.get('/login', (req,res)=>{
   res.render("signinagric")
});

//process the username and password that are submitted 
router.post('/', passport.authenticate('local',{failureRedirect: '/login'}),(req,res)=>{
   req.session.user = req.user;
   res.redirect('/farmerOdash')
});




module.exports = router;