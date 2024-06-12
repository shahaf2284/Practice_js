const express = require("express")
const productService = require("../Services/ProductService")

const route = express.Router()


route.get("/", async (req,res)=>{
    const products = await productService.getProducts()
    return res.json(products)
})

route.get("/:id", async (req,res)=>{
    const id = +req.params.id
    const product = await productService.getProduct(id)
    return res.json(product)
})

module.exports = route









