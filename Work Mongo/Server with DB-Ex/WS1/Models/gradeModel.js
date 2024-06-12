const mongo = require("mongoose")

const gradeModel = new mongo.Schema({
    StudentID : {
                required: true,
                type: mongo.Schema.Types.ObjectId
                } ,
    profession : {require: true,type: String} ,
    Score : String    
})



module.exports = mongo.model("Grade", gradeModel, "Grades")

