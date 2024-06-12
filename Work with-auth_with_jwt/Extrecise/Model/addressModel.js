const mongoose = require("mongoose");



const addressSchema = mongoose.Schema({
    externalld : Number,
    city : String,
    country : String 
})


const model = mongoose.model("addres", addressSchema, "address")
module.exports = model