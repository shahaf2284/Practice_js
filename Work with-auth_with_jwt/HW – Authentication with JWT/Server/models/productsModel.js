const mongoose = require("mongoose")





const productModel = mongoose.Schema({
    productID : String,
    poductName : String, 
    color : String,
    amount : Number,
    price : Number
})

const model = mongoose.model("product",productModel, "products")
module.exports = model