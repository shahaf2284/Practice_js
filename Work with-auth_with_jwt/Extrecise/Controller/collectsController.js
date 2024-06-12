const userCollects = require("../Services/userCollects")
const express = require("express")
const router = express.Router()


router.get("/", async (req,res) => {
   const users = await  userCollects.dataCollects()
   return res.json(users)
})

module.exports = router