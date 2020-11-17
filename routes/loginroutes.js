const express = require('express');
const router = express.Router();
const roles = require('../roles');

//require passport
const passport = require('passport');

//signin form
router.get('/login', (req,res)=>{
   res.render("signinagric")
});

//process the username and password that are submitted 
router.post('/', passport.authenticate('local',{failureRedirect: '/login'}),(req,res)=>{
   req.session.user = req.user;
   const userRole = req.user.role;

    if (userRole == 'agrico') {
      res.redirect('/agricOdash');
    } else if (userRole == 'farmerone') {
      res.redirect('/farmerOdash');
   } else if (userRole == 'urbanfarmer') {
      res.redirect('/farmerdash');
   }else {
       res.redirect('/login')
    }
      
   //  } else {
   //    userRole == 'urbanfarmer'
   //    res.redirect('/farmerdash');
    
  // res.redirect('/farmerOdash')
});




module.exports = router;