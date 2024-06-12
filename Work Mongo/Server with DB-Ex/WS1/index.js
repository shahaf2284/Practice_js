const express = require("express") 
const studentController = require("./Controllers/studentController")
const gradeController = require("./Controllers/gradeController")
const mongoose = require("mongoose")

// app is our control panel for creating and starting the server
const app = express()
const port = 8000



// parsing EVERY incoming request BODY from JSON -> JS OBJECT
app.use(express.json())

// app.use(cors())
app.use("/student", studentController)
app.use("/grade", gradeController)

mongoose.connect("mongodb://127.0.0.1:27017/StudentDB").then(() => console.log("Connected to DB")) 

// http://127.0.0.1:${port}
app.listen(port, () =>{
    console.log(`Server listen on port ${port}`)
})