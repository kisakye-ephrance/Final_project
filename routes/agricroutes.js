const express = require('express');

const router = express.Router();

//require the model
const AgricO  = require('../models/agricO');
const FarmerO = require('../models/FarmerO');

//registering farmer one
router.get('/registerFO',(req,res)=>{
    res.render("registerFarmerO")
})

//registering farmer
router.get('/farmerregistration', (req,res)=>{
    res.render("registerUfarmer")
})

//router.get('/', (req,res)=>{
   //  res.render("signinagric")
  //});

router.post('/', (req,res)=>{
    res.redirect("/farmerregistration")
});

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

//save data for AO
router.post('/registerFO', async(req,res)=>{
    try{
        const items = new AgricO(req.body);
        await AgricO.register(items, req.body.password, (err)=>{
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
// router.get('/userlist', async(req,res)=>{
//     try{
//         let items = await AgricO.find();
//         console.log(items);
//         res.render("registeredaFO", {users:items});
//     }catch(err){
//         console.log('random message')
//         res.status(400).send('unable to retrieve data');
//     }
// });   


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
        try {
            const updateUser = await AgricO.findOne({ _id:req.params.id })
            res.render('updateFO', { user: updateUser })
        } catch (err) {
            res.status(400).send("Unable to find item in the database");
        }
    })

    

router.post('/update', async (req, res) => {
    try {
        await AgricO.findOneAndUpdate({_id:req.query.id}, req.body)
        res.redirect('/userlist');
    } catch (err) {
        res.status(404).send("Unable to update item in the database");
    }    
});

//save data for FO
router.post('/farmerregistration', async(req,res)=>{
    try{
        const farmerO = new FarmerO(req.body);
        await  farmerO.save(()=>{
            console.log('save successful')
            res.redirect('/flist')
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

//exporting router
module.exports = router;