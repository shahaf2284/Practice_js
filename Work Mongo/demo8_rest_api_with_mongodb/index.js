
const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors")
// const mongoose = require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/Node46DB").then(() => console.log("Connected to DB"))

 require("./configs/database")

app.use(express.json())
app.use(cors())
const usersController = require("./Controllers/usersController")
app.use("/users", usersController)


app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});