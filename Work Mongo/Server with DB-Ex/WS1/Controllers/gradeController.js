const express = require("express")
const router = express.Router()
const gradeService = require("../Services/gradeService")




router.get("/", async (req,res)=>{
    try {

        const grades = await gradeService.getAllData()
        return res.json(grades)
    }
    catch{
        return { error: message }
    }
})

router.get("/:profession", async(req,res) =>{
    try {
        const profession = req.params.profession
        const grade = await gradeService.getByProfession(profession);
        console.log(`The Profession that you serch is ${profession}`)
        return res.json(grade)
    }
    catch{
        return { error: e.message }
    }
})


module.exports = router