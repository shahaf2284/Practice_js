const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const productService = require("../Services/productService")



router.get("/", async (req, res) =>{
    try {
        console.log("getAll request!!")
        const token = req.headers["token"] 
        if (!token) return res.json({ success: false, error: "No token provided..." })
        // const decoded = jwt.verify(token, "secret")
        const products = await productService.getAllProduct()
        return res.json({ success: true, products: products })
    }
    catch(e) {
        return res.json({success: false, error: e.message})
    }
})


router.get("/:id", async (req, res) =>{
    try {
        console.log("get by id request!!")
        const token = req.headers["token"] 
        if (!token) return res.json({ success: false, error: "No token provided..." })
        const decoded = jwt.verify(token, "secret")  // I get the user id and name and id 
        const id = req.params.id
        const product = await productService.getProductById(id)
        return res.json({ success: true, products: product })
    }
    catch(e) {
        return res.json({success: false, error: e.message})
    }
})

// Creat new product
router.post("/admin",async (req,res)=>{
    try{
        console.log("post request!!")
        const token = req.headers["token"] 
        if(!token) return res.json({seccess: false, error: "No token provided..." })
        const decoded = jwt.verify(token, "secret") 
        if(decoded.admin !== 1){return res.json({seccess: false, error: "You do not have editing privileges, only admin can edit" })}
        const answer = await productService.creatProduct(req.body)
        return res.json({message : answer})
    }
    catch(e){
        return res.json({error : e.message})
    }
})

// Update product
router.put("/admin/:id", async (req, res)=>{
    try{
        console.log("put request!!")
        const token = req.headers["token"]
        if(!token) return res.json({seccess: false, error: "No token provided..."})
        const decoded = jwt.verify(token, "secret")
        console.log(decoded)
        if(decoded.admin !== 1) return res.json({seccess:false, error: "You do not have editing privileges, only admin can edit"})
        const answer = await productService.updatePoduct(req.params.id, req.body)
        return res.json({message: answer})
    }   
    catch(e){
        return res.json({error : e.message})
    }
})


router.delete("/admin/:id", async (req, res)=>{
    try{
        console.log("delete request!!")
        // Get the token
        const token = req.headers["token"]
        // Checking whether a token exists
        if(!token) return res.json({seccess: false, error: "No token provided..."})
        const decoded = jwt.verify(token, "secret")
        // Checking if the user has admin privileges
        if(decoded.admin !== 1) return res.json({seccess: false, error: "You do not have editing privileges, only admin can edit"})
        const answer = await productService.DeletedPoduct(req.params.id)
        return res.json({message: answer})
    }
    catch(e){
        return res.json({error: e.message})
    }
})

module.exports = router








