const express = require('express');

const router = express.Router();

const multer = require('multer');

 path = require('path');

 const bodyParser = require('body-parser');

//require the model
const AgricO  = require('../models/agricO');
const FarmerO = require('../models/FarmerO');
const Users = require('../models/Users');
const Ufarmer = require('../models/ufarmer');
const AO = require('../models/ao');

//registering farmer one
router.get('/registerFO',(req,res)=>{
    res.render("registerFarmerO")
})

//registering farmer
router.get('/farmerregistration', (req,res)=>{
     res.render("registerUfarmer")
 });

 //registering ao
router.get('/aoregistration', (req,res)=>{
    res.render("signupao")
});

//router.get('/', (req,res)=>{
   //  res.render("signinagric")
  //});

// router.post('/', (req,res)=>{
//     res.redirect("/farmerregistration")
// });

//router.post('/registerFO', async(req,res)=>{
   // console.log(req.body);
     //create a new object of the model
    // const agricO = new AgricO(req.body);
    // agricO.save()
    // .then(() => { res.send('thank you') })
    //.catch((err) => {
    //  console.log(err);
     //  res.send('Sorry! Something went wrong.')})
    
   //});
   //res.render("farmerone")

   //save credentials for AO
router.post('/aoregistration', async(req,res)=>{
    try{
        const items = new AO(req.body);
        const users = new Users(req.body)
        items.save()
        await Users.register(users, req.body.password, (err)=>{
            if (err)
            {
                throw(err)
            }
            res.redirect('/login')
        // const agricO = new AgricO(req.body);
        // await  agricO.save(()=>{
        //     console.log('save successful')
        //     res.redirect('/userlist')
           // res.send('thank you for registration')
            })
    }
    catch(err){
        res.status(400).send('sorry something')
        console.log(err)
    }
});

//save data for AO
router.post('/registerFO', async(req,res)=>{
    try{
        const items = new AgricO(req.body);
        const users = new Users(req.body)
        items.save()
        await Users.register(users, req.body.password, (err)=>{
            if (err)
            {
                throw(err)
            }
            res.redirect('/login')
        // const agricO = new AgricO(req.body);
        // await  agricO.save(()=>{
        //     console.log('save successful')
        //     res.redirect('/userlist')
           // res.send('thank you for registration')
            })
    }
    catch(err){
        res.status(400).send('sorry something')
        console.log(err)
    }
});

    //retrieve data for AO
router.get('/userlist', async(req,res)=>{
    if (req.session.user){
        try{        
            let items = await AgricO.find();
            console.log(items);
            res.render("registeredaFO", {users:items, currentUser:req.session.user});
       }catch(err){
           console.log('random message')
          res.status(400).send('unable to retrieve data');
        }   
    } else{
        console.log('cant find session')
        res.redirect('/login')
    };
//     //try{        
//         let items = await AgricO.find();
//         console.log(items);
//         res.render("registeredaFO", {users:items});
//    }catch(err){
//        console.log('random message')
//       res.status(400).send('unable to retrieve data');
//     }
 });   


//delete data
//router.post('/delete', async(req,res)=>{
    //try{
       // await AgricO.deleteOne({_id: req.body.id });
        //after deleting redirect back
       // res.redirect('back');
   // }catch(err){
        //res.status(400).send('unable to delete items in the database');
   // }
    
//})

//route for updating AO data
    router.get('/update/:id', async (req, res) => {
        if(req.seesion.user){
            try {
                const updateUser = await AgricO.findOne({ _id:req.params.id })
                res.render('updateFO', { user: updateUser })
            } catch (err) {
                res.status(400).send("Unable to find item in the database");
            }
        }else{
            console.log('cant find session')
            res.redirect('/login')
        }
        // try {
        //     const updateUser = await AgricO.findOne({ _id:req.params.id })
        //     res.render('updateFO', { user: updateUser })
        // } catch (err) {
        //     res.status(400).send("Unable to find item in the database");
        // }
    })

    

router.post('/update', async (req, res) => {
    if(req.session.user){
        try {
            await AgricO.findOneAndUpdate({_id:req.query.id}, req.body)
            res.redirect('/userlist');
        } catch (err) {
            res.status(404).send("Unable to update item in the database");
        }    
    }
    // try {
    //     await AgricO.findOneAndUpdate({_id:req.query.id}, req.body)
    //     res.redirect('/userlist');
    // } catch (err) {
    //     res.status(404).send("Unable to update item in the database");
    // }    
});

//save data for FO
router.post('/farmerregistration', async(req,res)=>{
    try{
        const farmerO = new FarmerO(req.body);
        const users = new Users(req.body)
        farmerO.save()
        await Users.register(users, req.body.password, (err)=>{
            if (err)
            {
                throw(err)
            }
            res.redirect('/login')
        // const agricO = new AgricO(req.body);
        // await  agricO.save(()=>{
        //     console.log('save successful')
        //     res.redirect('/userlist')
           // res.send('thank you for registration')
            })
    }
    catch(err){
        res.status(400).send('sorry something')
        console.log(err)
    }
});


 //retrieve data for FO
 router.get('/flist', async(req,res)=>{
    try{
        let items = await FarmerO.find();
        console.log(items);
        res.render("registeredF", {userF:items});
    }catch(err){
        console.log('random message')
        res.status(400).send('unable to retrieve data');
    }
});   

//route for updating FO data
router.get('/updateF/:id', async (req, res) => {
    try {
        const updateUser = await FarmerO.findOne({ _id:req.params.id })
        res.render('updateF', { user: updateUser })
    } catch (err) {
        res.status(400).send("Unable to find item in the database");
    }
});



router.post('/updateF', async (req, res) => {
try {
    await AgricO.findOneAndUpdate({_id:req.query.id}, req.body)
    res.redirect('/flist');
} catch (err) {
    res.status(404).send("Unable to update item in the database");
}    
});

//uploading products
//Setting image upload storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename:(req, file, cb)=>{
      cb(null, file.fieldname + '-' + Date.now() + 
      path.extname(file.originalname));
    }
  });
  
  //Image upload
  const upload = multer({
    storage: storage,
  }).single('upload');

  router.get('/uploadufarmer', (req,res)=>{
      res.render("uploadufarmer")
  });

//save data to db - make sure to edit here
router.post('/uploadufarmer', upload, async(req,res) =>{
    try{
        const ephrance= new Ufarmer(req.body);
        ephrance.upload = req.file.filename;
        await ephrance.save() 
        res.redirect('viewfuploads')
    }
    catch(err) {
        res.status(400).send('Sorry! Something went wrong')
        console.log(err)
    }
});

//retrieve data from db - make sure to edit here
router.get('/viewfuploads', async(req,res) =>{
    try{
        let items = await Ufarmer.find()
        console.log(items)
        res.render('viewfuploads', {users: items})
    }
    catch(err) {
        res.status(400).send('Unable to find items in the database')
       
    }
})

router.get('/updateproduct/:id', async(req, res)=>{
    try{
      const updateProduce = await Ufarmer.findOne({_id:req.params.id})
      res.render('updateproducts', {item: updateProduce})
    }catch (err){
      res.status(400).send("Failed to get produce data");
    }
  });

  router.post('/updateproduct', upload, async(req,res)=>{
    try{
      if(req.file){
      const img2 = await Ufarmer.findOneAndUpdate({_id:req.query.id}, req.body);
      img2.upload = req.file.filename;
      await img2.save()
      } else{
        await Ufarmer.findOneAndUpdate({_id:req.query.id}, req.body);
      }
      res.redirect('/viewfuploads');
    }catch(err){
      res.status(400).send('Sorry! Data posting failed')
    }
  });
  
//verify
router.get('/verify/:id', async(req, res)=>{
    if(req.session.user){
    try{
      const updateProduce = await Ufarmer.findOne({_id:req.params.id})
      res.render('verify', {item: updateProduce})
    }catch (err){
      res.status(400).send("Failed to get produce data");
    }
}else{
    console.log('cant find session')
    res.redirect('/login')
}
});

// customer page
router.get('/farmerproduce', async(req,res)=>{
    try{
        const status = await Ufarmer.find({status: 'Approved'})
        res.render('farmerproduce', {items: status})
    }catch(err){
        res.status(400).send('display of products failed')
    }  
});



//exporting router
module.exports = router;