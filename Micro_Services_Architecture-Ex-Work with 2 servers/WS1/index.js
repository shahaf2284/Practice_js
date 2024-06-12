const express = require("express")
const productControl = require("./Controllers/ProductControl")
const port = 8001


// app is our control panel for creating and starting the server
const app = express()

// parsing EVERY incoming request BODY from JSON -> JS OBJECT
app.use(express.json())

app.use("/products", productControl)

app.listen(port,()=>{
    console.log(`My server is listen on port ${port}...`)
})
