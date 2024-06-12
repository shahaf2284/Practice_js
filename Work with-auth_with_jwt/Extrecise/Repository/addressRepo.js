const addressModel = require("../Model/addressModel")


const getAddressById = async (id) =>{
    const address = await addressModel.findById(id)
    // const address = await addressModel.find({})
    return address
}

module.exports = {getAddressById}