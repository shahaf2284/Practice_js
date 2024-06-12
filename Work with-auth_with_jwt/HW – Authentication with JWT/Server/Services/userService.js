const userModel = require("../models/usersModel")






//obj = {name and password}
const getUserLogindetails = async (obj) => {
    const users = await userModel.find({})
    for(user of users){
        if(user.name === obj.name && user.password === obj.password && user.id === obj.id){
            return user
        }
    }
}


module.exports = {getUserLogindetails}
