const axios = require("axios")


const getUserById = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

module.exports = {getUserById}