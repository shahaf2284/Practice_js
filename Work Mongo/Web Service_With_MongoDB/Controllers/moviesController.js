const express = require("express")
const movieServices = require("../Services/movieService")
const router = express.Router()


// Get all request - GET all movies from DB 
router.get("/", async (req,res)=>{
    const movies = await movieServices.getAllMovies()
    console.log(movies)
    return res.json(movies)
})

// Get by id request - GET by id movies from DB 
router.get("/:id", async (req,res)=>{
    const id = req.params.id
    const movie = await movieServices.getMoviesById(id)
    return res.json(movie)
})


// Post(add obj) - Create new movie - add new movie to the DB 
router.post("/", async (req,res) => {
    const movie = req.body;
    const status = await movieServices.addMovie(movie)
    return res.json({msg:status})
})

// Put(update) movie in the DB 
router.put("/:id", async (req,res) => {
    const id = req.params.id
    const movie = req.body;
    const status = await movieServices.updateMovie(id, movie)
    return res.json({msg:status})
})

router.delete("/:id", async (req,res) => {
    const id = req.params.id
    const status = await movieServices.deletedMovie(id)
    return res.json({msg:status})
})




module.exports = router