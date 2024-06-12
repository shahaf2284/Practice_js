const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const userService = require("../Services/userService")




// http://localhost:8000/auth/login
router.post("/login", async (req, res)=> {
    const username = req.body.username.trim()
    const password = req.body.password.trim()
    const id = +req.body.id
    if (!username || !password || !id) return res.json({error: "username and password are required"})
    const obj = {name : username, password : password, id : id}
    const user = await userService.getUserLogindetails(obj)
    if (!(username === user.name && user.password === password && user.id === id)) return res.json({error: "Username and password are invalid"})
    if(!user.admin){
        //jwt.sign(payload, secretKey, options);
        const token =  jwt.sign({id: user.id, name: user.name, id: user.id}, "secret", {expiresIn: "200000s"})
        return res.json({ success: true, token: token})
    }
    const tokenAdmin =  jwt.sign({id: user.id, name: user.name, id: user.id, admin: user.admin}, "secret", {expiresIn: "120s"})
    return res.json({success: true, token: tokenAdmin })
})


module.exports = router


