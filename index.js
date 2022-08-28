
const express = require("express");
require("./db/connect");
const appoinment = require("./db/appoinment");
const consult = require("./db/consult");
const app = express();
app.use(express.urlencoded({extended:false}));
app.post("/appoinment",async(req,res)=>{
    try{
        console.log(req.body);
    const userData = new appoinment({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            city: req.body.city,
            speciality: req.body.speciality
        });
        await userData.save();
        res.sendFile("file sent");
    } catch(err){
        res.status(500).send(err);
    }
})
app.post("/consult",async(req,res)=>{
    try{
        console.log(req.body);
    const userData = new appoinment({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            mode: req.body.mode,
            speciality: req.body.speciality
        });
        await userData.save();
        res.redirect("/");
    } catch(err){
        res.status(500).send(err);
    }
})


app.listen(8080,()=>{
    console.log("listiening...");
})


