const express = require("express")
const app = express();

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/NodeDB").then(() => console.log("Connected to DB"))

const cors = require("cors")
app.use(cors())

//parsing 
app.use(express.json())
const port = 8000

const authController = require("./Server/Controllers/authController")
app.use("/auth", authController)

const productController = require("./Server/Controllers/productController")
app.use("/products", productController)




app.listen(port,()=>{
    console.log(`Server is running at http://127.0.0.1:${port}`);
})


