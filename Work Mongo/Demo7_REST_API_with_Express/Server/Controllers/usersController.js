const express = require("express")

const router = express.Router()
const usersService = require("../Services/usersService")
// http://localhost:8000/users/
router.get("/", (req,res) => {
   const users =  usersService.getAllUsers()
   return res.json(users)
})


// http://localhost:8000/users/1
router.get("/:id", (req,res) => {
    console.log(req.params) // {id: 1}
   const user =  usersService.getUserById(+req.params.id)
   return res.json(user)
})

// http://localhost:8000/users
router.post("/", (req,res) => {
    const newUser = req.body
    console.log(req.body)
    const status = usersService.createUser(newUser)
    return res.json({msg: status})
})

router.put("/:id", (req,res) => {
    const id = +req.params.id
    const newUserData = req.body
   const status =  usersService.updateUser(id, newUserData)
   return res.json({msg: status})
})


router.delete("/:id", (req, res) => {
    const id = +req.params.id
   
    const status = usersService.deleteUser(id)
    return res.json({ msg: status })
})
// router.delete()



module.exports = router