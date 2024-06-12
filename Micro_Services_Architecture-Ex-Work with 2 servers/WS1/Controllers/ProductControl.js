const ServicesProduct = require("../Services/ProductService")
const express = require("express")

const route = express.Router()


// GetAll request 
route.get("/", async (req,res)=>{
   const data = await ServicesProduct.getData()
   return res.json(data)
})

// Get by id request 
route.get("/:id", async (req,res)=>{
   const id = +req.params.id
   const data = await ServicesProduct.getDataById(id)
   return res.json(data)
})

module.exports = route