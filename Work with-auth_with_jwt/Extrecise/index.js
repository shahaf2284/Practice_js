const express = require('express');
const app = express();
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/NodeDB").then(() => console.log("Connected to DB"))

const usercollects = require("./Controller/collectsController")



app.use("/user", usercollects)


app.listen(8000, () => {
    console.log(`Server is running at http://127.0.0.1:8000`);
});