const mongoose = require("mongoose")



const userModel = mongoose.Schema({
    name : String, 
    id : Number,
    age : Number,
    password : String,
    admin : Number
})


const model = mongoose.model("user", userModel, "users")
module.exports = model