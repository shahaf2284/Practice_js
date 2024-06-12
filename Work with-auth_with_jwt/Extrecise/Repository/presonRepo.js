const Jfile = require("jsonfile")
const path = require("path")

const filePath = path.join(__dirname,"../Data/persons.json")

const getAllPersons = () =>{
    return  Jfile.readFile(filePath)
}

module.exports = {getAllPersons} 