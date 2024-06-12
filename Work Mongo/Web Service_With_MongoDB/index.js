const express = require("express")
const movieController = require("./Controllers/moviesController")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 8000

app.use(express.json()) // parsing from JSON to JS Object
app.use(cors()) // creat HTML File 
app.use("/movies", movieController)
mongoose.connect("mongodb://127.0.0.1:27017/NodeDB").then(() => console.log("Connected to DB")) 

app.listen(port, () => {
    // console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Server is running at https://72vw44gf-${port}.euw.devtunnels.ms`);
});











