const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")



router.get("/", async (req, res) => {
    try {
        const token = req.headers["token"]
        if (!token) return res.json({ success: false, error: "No token provided" })

        const decoded = jwt.verify(token, "secret")
        console.log(decoded)
        return res.json({ success: true, products: [{ id: 1, name: "tv", price: 1000 }, { id: 2, name: "PC", price: 3000 }] })
    }catch(e) {
        return res.json({success: false, error: e.message})
    }
  
})

module.exports = router