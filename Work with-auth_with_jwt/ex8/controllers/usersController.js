const usersService = require("../Services/usersService")
const express = require("express")
const router = express.Router()

router.get("/", async (req,res) => {
    const users = await usersService.getAllUsers()
    return res.json(users)
})

module.exports = router