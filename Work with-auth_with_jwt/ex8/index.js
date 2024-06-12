const express = require('express');
const app = express();
const port = 8000;
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Node46DB").then(() => console.log("connected to DB"))

const usersController = require("./controllers/usersController")
app.use("/users", usersController )


app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});