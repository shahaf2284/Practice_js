const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {required: true, type: String},
    age: Number,
    
  
})

module.exports = mongoose.model("user", userSchema)