const gradesModels = require("../Models/gradeModel")



const getAllData = async () => {
        const grades = await gradesModels.find({})
        return grades
    }

const getByProfession = async (profession) => {
        const grade = await gradesModels.find({Profession : profession})
        return grade
}

module.exports = {getAllData, getByProfession}