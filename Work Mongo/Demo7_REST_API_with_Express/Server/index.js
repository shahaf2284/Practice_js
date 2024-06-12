const express = require("express")
const cors = require("cors")

// app is our control panel for creating and starting the server
const app = express()


app.use(express.json()) // parsing EVERY incoming request BODY from JSON -> JS OBJECT
app.use(cors())

// this controller will activate the function only if the request address is "http://localhost:8000/users"
const usersController = require("./Controllers/usersController")
app.use("/users", usersController)

app.listen(8000, () => {
    console.log("Server is is listening on port 8000")
})