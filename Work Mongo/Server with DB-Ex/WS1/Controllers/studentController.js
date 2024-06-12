const express = require("express")
const router = express.Router()
const studentService = require("../Services/studentService")


router.get("/", async (req,res) =>{
    try {
        const students = await studentService.getAllStudent();
        // console.log(students)
        return res.json(students)
    }
    catch{
        return { error: e.message }
    }
})

router.get("/:id",async (req,res) =>{
    try {
        const id = req.params.id
        const student = await studentService.getStudentById(id);
        return res.json(student)
    }
    catch{
        return { error: e.message }
    }
})


module.exports = router