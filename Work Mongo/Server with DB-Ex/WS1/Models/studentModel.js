const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    Name : {required: true, type: String} ,
    City : {required: true, type: String} ,
    Faculty : {required: true, type: String} 
})

module.exports = mongoose.model("student", studentSchema, "Students")