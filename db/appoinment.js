const mongoose = require("mongoose");
const userSchema2 = new mongoose.Schema({
    name:"string",
    email:"string",
    phone:"number",
    city:"string",
    speciality:"string"
});
const appoinment = new mongoose.model("appoinment",userSchema2);
module.exports = appoinment;