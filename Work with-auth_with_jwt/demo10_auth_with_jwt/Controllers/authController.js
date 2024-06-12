const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")

// http://localhost:8000/auth/login
router.post("/login", async (req,res) => {

    const username = req.body.username
    const password = req.body.password
    if (!username || !password) return res.json({error: "username and password are required"})
    if (!(username === "Avi" && password === "123")) return res.json({error: "Username and password are invalid"})

   const token =  jwt.sign({id: 1}, "secret", {expiresIn: "20s"})
   return res.json({success: true, token: token})

})



module.exports = router