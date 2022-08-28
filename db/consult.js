const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/hospital", { useNewUrlParser: true, useUnifiedTopology: true  })
// .then(()=>console.log("connect"))
// .catch((error)=>console.log(error));

const userSchema3 = new mongoose.Schema({
    name:"string",
    email:"string",
    phone:"number",
    mode:"string",
    speciality:"string"
});
const consult = new mongoose.model("consult",userSchema3);
module.exports = consult;