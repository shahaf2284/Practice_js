let cars = [
    {id: 1,Model: "Sport", year: 2018, color:"gray"},
    {id: 2,Model: "Family", year: 2024, color:"green"},
    {id: 3,Model: "SUV", year: 2001, color:"blue"},
    {id: 4,Model: "SUV", year: 2015, color:"blue"},
    {id: 5,Model: "Sport", year: 2022, color:"red"},
    {id: 5,Model: "Family", year: 2016, color:"pink"},
];

const getAllCars = () => {
        return cars;
    }

const getCarById = (id) => {
        return cars.find((elem)=>elem.id === id);
    }

const addCar = (newCar) =>{
    cars.push(newCar);
    return "Created ...";
}

const updateCar = (id, newCar) =>{
    const index = cars.findIndex((elem) => elem.id === id);
    cars[index] = newCar;
    return "Update the car ...";
}

const deleteCar = (id) =>{
    const newCars = cars.filter((elem) => elem.id !== id);
    cars = newCars;
    return "delete the car ...";
}


module.exports = {getAllCars, getCarById, addCar, updateCar, deleteCar}