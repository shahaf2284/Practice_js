const express = require("express")
const cors = require("cors")
require("./configs/database")
const app = express() 
const port = 8000

// parsing
app.use(express.json())

// using html 
app.use(cors())

app.listen(port, ()=>{
    console.log("The server is up op port 8000")
})
