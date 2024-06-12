const Movie = require("../models/moviesModel")


// Get all request - GET all movies from DB 
const getAllMovies = async () =>
    {
        const movies = await Movie.find({})
        return movies
    } 

// Get by id request - GET all movies from DB 
const getMoviesById = async (id) =>
    {
        const movie = await Movie.findById(id)
        return movie
    } 

// Post -Create new movie - add new movie to the DB 
const addMovie = async (newMovie) =>
    {
        const movie = new Movie(newMovie)
        await movie.save()
        return "Add successfully...."
    } 

// Put update movie in the DB 
const updateMovie = async (id, movie) =>
    {
        await Movie.findByIdAndUpdate(id, movie)
        return "successfully updated ...."
    } 

// Delete movie from the DB 
const deletedMovie = async (id) =>
    {
        await Movie.findByIdAndDelete(id)
        return "Deleted successfully ...."
    }




module.exports = {getAllMovies, getMoviesById, addMovie, updateMovie, deletedMovie}