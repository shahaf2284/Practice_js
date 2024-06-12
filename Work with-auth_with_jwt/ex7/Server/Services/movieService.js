const movieModel = require("../models/movieModel")

const getAllMovies =  () => {
    return movieModel.find({})  
}


const createMovie = async (movie) => {          // {name, director, premiered}
    const newMovie = new movieModel(movie)      // {_id, name, director, premiered}
    await newMovie.save()
    return "Created"

}

// id -> "k5j436hkj45h64", {name, director, premiereYear}
const updateMovie = async (id, newMovieData) => { 
    await movieModel.findByIdAndUpdate(id, newMovieData)
    return "Updated"

} 

// id -> "k5j436hkj45h64",
const deleteMovie = async (id) => {
    await movieModel.findByIdAndDelete(id )
    return "Deleted"

} 

module.exports = {createMovie,deleteMovie,updateMovie,getAllMovies}