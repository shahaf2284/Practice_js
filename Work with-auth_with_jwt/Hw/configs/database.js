const mongoos = require("mongoose")

mongoos.connect("mongodb://localhost:27017/").then(()=>console.log("Connected to DB"))

