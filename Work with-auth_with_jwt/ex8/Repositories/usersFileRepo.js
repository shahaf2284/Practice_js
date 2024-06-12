const jFile = require("jsonfile")
const path = require("path")
const filePath = path.join(__dirname, "../data/users.json")


const getAllUsers = () => {
    return jFile.readFile(filePath)
}

module.exports = {getAllUsers}