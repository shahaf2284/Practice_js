const mongoose = require("mongoose")


const modelMovie = new mongoose.Schema( {
    name: {required: true, type: String},
    director : String,
    premieredYear : Number
    })

module.exports = mongoose.model("movie", modelMovie, "Movies")