const usersModel = require("../models/usersModel")


const getUserById = (id) => {
   return usersModel.findOne({externalId: id})
}

module.exports = {getUserById}