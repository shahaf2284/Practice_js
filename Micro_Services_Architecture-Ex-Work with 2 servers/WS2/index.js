const express = require('express');
const productControl = require("./Controller/productControl")
const port = 8000

// app is our control panel for creating and starting the server 
const app = express()

// parsing every incoming request body from json to JS OBJECT 
app.use(express.json()) 


app.use("/products", productControl)


app.listen(port, () => {
    console.log(`The server product on port ${port}...`)
})