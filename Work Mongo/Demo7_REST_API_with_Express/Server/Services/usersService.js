let users = [
    { id: 1, name: "Avi", age: 30 },
    {id: 2, name: "Dana", age: 40},
    { id: 3, name: "Ron", age: 50 },
]


const getAllUsers = () => {
    return users
}

const getUserById = (id) => {
    return users.find((user) => user.id === id)
}

const createUser = (user) => {
    users.push(user)
    return "Created..."
}

const updateUser = (id, newUserData) => {
   const index =  users.findIndex((user) => user.id === id)
   users[index] = newUserData
   return "Updated..."
}

const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id)
    users = newUsers
    return "Deleted..."
}

module.exports = {createUser,deleteUser,getAllUsers,getUserById,updateUser}