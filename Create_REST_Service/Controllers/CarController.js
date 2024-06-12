const express = require("express")
const carService = require("../Services/CarServices")


// All the medhode we need to create REST API Server with get, post, put and delete.
const route = express.Router()  

// GetAll request *(Must return json object)
route.get("/", (req,res) =>{
    const cars = carService.getAllCars();
    return res.json(cars);
})


// GetById request *(Must return json object)
route.get("/:id", (req,res) =>{
    const car = carService.getCarById(Number(req.params.id)); // also to pars we can do "+req.params.id"
    return res.json(car);
})


// Post/Add request *(Must return json object)
route.post("/", (req,res) =>{
    const newCar  = req.body;
    const answer = carService.addCar(newCar)
    return res.json({msg: answer});
})


// Put/Update request *(Must return json object)
route.put("/:id", (req,res) =>{
    const carUpdate  = req.body;
    console.log(carUpdate)
    const answer = carService.updateCar(+req.params.id, carUpdate)
    return res.json({msg: answer});
})


// delete request *(Must return json object)
route.delete("/:id", (req,res) =>{
    const id = +req.params.id
    const answer = carService.updateCar(id)
    return res.json({msg: answer});
})


module.exports = route