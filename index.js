const express = require('express');
const bodyParser = require('body-parser') ;
const path = require('path');
const AgricO  = require('./models/agricO');
const agricroutes = require('./routes/agricroutes');
const loginRoutes = require('./routes/loginroutes');

//require mongoose
const mongoose = require('mongoose');

//require passport mongoose to see the passwors as salt and hash
const passportLocalMongoose = require('passport-local-mongoose');

//require env
require('dotenv').config();

//express session requiring to help us save the express session cookie and track details of the person
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

//require passport
const passport = require('passport');

//appexpress
const app = express();

//require('./models/Registration');

//db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
  });
  

  //logging to show the connection is successful
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
   console.log(`Connection error: ${err.message}`);
  });

//Configs
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//connecting to static files;
app.use(express.static(path.join(__dirname, 'public')));

// middleware settings
//Simple request time logger for a specific route
app.use((req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});

app.use(bodyParser.urlencoded({extended: true}))

//using aunthetication middleware
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configs
passport.use(AgricO.createStrategy());
passport.serializeUser(AgricO.serializeUser());
passport.deserializeUser(AgricO.deserializeUser());

app.use('/', agricroutes);
app.use('/',loginRoutes);

app.get('/about',(req,res)=>{
    res.render("about")
  })
  
  app.get('/contact',(req,res)=>{
    res.render("contact")
  })
  
  app.get('/home', (req,res)=>{
    res.render("home")
  })

  //app.get('/registeredaFO',(req,res)=>{
    // res.render("registeredaFO")
 // })

  app.get('/agricOdash', (req,res)=>{
    res.render('agricOdash',{title:'AO Dash'})
  })
  
  // GET FARMERONE DASH
  app.get('/farmerOdash', (req,res)=>{
    res.render('farmerOdash', {title:'FO Dash'})
  })

  //GET FARMER DASH
  app.get('/farmerdash', (req,res)=>{
    res.render('farmerdash', {title: 'FA Dash'})
  });

  //app.get('/signin', (req,res)=>{
    //res.render("signinagric")
 // })

  //app.post
  //created a server and have it listen on port 3000
app.listen(3000, ()=> console.log('listening on port 3000'))