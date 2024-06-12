const express = require("express")
const router = express.Router()
const movieService = require("../Services/movieService")

// GET ALL MOVIES
router.get("/", async (req, res) => {
    try {
        const movies = await movieService.getAllMovies()
        return res.json({ movies })
    } catch (e) {
        return res.json({ error: e.message })
    }

})

// ADD MOVIE
router.post("/", async (req, res) => {
    try {
        const movie = req.body
        const status = await movieService.createMovie(movie)
        return res.json({ status })
    } catch (e) {
        return res.json({ error: e.message })
    }



})

// update movie
// http://localhost:8000/movies/345k34jk534
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id // {id: "345k34jk534"}
        const movieData = req.body
        const status = await movieService.updateMovie(id, movieData)
        return res.json({ status })
    } catch (e) {
        return res.json({ error: e.message })
    }

})
// delete movie
// http://localhost:8000/movies/345k34jk534
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id // {id: "345k34jk534"}
        const status = await movieService.deleteMovie(id)
        return res.json({ status })
    } catch (e) {
        return res.json({ error: e.message })
    }

})

module.exports = router