const express = require("express");
const Carcontroller = require("./Controllers/CarController")
// app is our control panel for creating and starting the server
const app = express()

app.use(express.json()) // parsing EVERY incoming request BODY from JSON -> JS OBJECT

// this controller will activate the function only if the request address is "http://localhost:8000/cars"
app.use("/cars", Carcontroller)

//listen server 
app.listen(8000, () => {
    console.log("Server is listening on port 8000")
})



