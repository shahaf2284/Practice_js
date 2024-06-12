const student = require("../Models/studentModel")

const getAllStudent = async () => 
    {
        const std = await student.find({})
        // console.log(std)
        return std
    }


const getStudentById = async (id) => 
    {
        const std = await student.findById(id)
        return std
    }

module.exports = {getAllStudent, getStudentById}