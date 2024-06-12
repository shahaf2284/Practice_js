const Jfile = require("jsonfile")
const path = require('path')


const FILE = path.join(__dirname, "../Data/Orders.json");


const getOrder = () =>{
    return Jfile.readFile(FILE)
}

module.exports = {getOrder}