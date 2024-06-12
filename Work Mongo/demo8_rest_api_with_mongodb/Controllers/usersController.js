const express = require("express")
const router = express.Router()
const usersService = require("../Services/usersService")

// http://localhost:8000/users

router.get("/", async (req, res) => {
    try {
        const users = await usersService.getAllUsers()

        return res.json(users)
    } catch (e) {
        return { error: e.message }
    }

})

router.get("/names", async (req, res) => {
    try {
        const names = await usersService.getUsersNames()

        return res.json(names)
    } catch (e) {
        return { error: e.message }
    }

})


router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await usersService.getUserById(id)
        return res.json(user)
    } catch (e) {
        return { error: e.message }
    }

})

router.post("/", async (req, res) => {
    const user = req.body
    const status = await usersService.createUser(user)
    return res.json({ status })
})

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const newData = req.body
    const status = await usersService.updateUser(id, newData)
    return res.json({ status })
})


router.delete("/:id", async (req, res) => {
    const id = req.params.id

    const status = await usersService.deleteUser(id)
    return res.json({ status })
})

module.exports = router