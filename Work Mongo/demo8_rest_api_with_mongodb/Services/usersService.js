const User = require("../models/userModel")



const getAllUsers = async () => {
    const users = await User.find({})
    return users
}

const getUsersNames = async () => {
    const users = await getAllUsers()
    const names = users.map((user) => user.name)
    return names
}

const getUserById = async (id) => { // "6654a42c96f1cf75242e3e06"
    const user = await User.findById(id)
    return user


    // User.findOne({username: username})

}

const createUser = async (user) => { // {name: "Elicopter", age: 30}

    const newUser = new User(user) // {_id: j345hjh345, name: "Elicopter", age: 30}
    await newUser.save()
    return "Created"

}

const updateUser = async (id, newData) => { // 234hj23h42234, {name: "Avi"}

    await User.findByIdAndUpdate(id, newData)
    return "Updated"




    // User.findOneAndUpdate({name: "Ronen"}, newData)
}

const deleteUser = async (id) => { // 234hj23h42234, {name: "Avi"}

    await User.findByIdAndDelete(id)
    return "Deleted"

    // User.findOneAndDelete({name: "Ronen"}, newData)
}

module.exports = {createUser,deleteUser,getAllUsers,getUserById,getUsersNames,updateUser}