const usersDBRepo = require("../Repositories/usersDBRepo")
const usersFileRepo = require("../Repositories/usersFileRepo")
const usersWSRepo = require("../Repositories/usersWSRepo")


const getAllUsers = async () => {
    const finalUsers = []

    const usersFromJfile = await usersFileRepo.getAllUsers()

    for (let i = 0; i < usersFromJfile.length; i++) {
        const userFromFile = usersFromJfile[i]
        const finalUser = {}
        finalUser.id = userFromFile.id
        finalUser.phone = userFromFile.phone

        const { data: userFromWS } = await usersWSRepo.getUserById(userFromFile.id)
        finalUser.name = userFromWS.name
        finalUser.email = userFromWS.email

        const userFromDB = await usersDBRepo.getUserById(userFromFile.id)
        finalUser.address = {}
        finalUser.address.city = userFromDB.city
        finalUser.address.country = userFromDB.country


        finalUsers.push(finalUser)

        
    }




    return finalUsers
}

module.exports = { getAllUsers }