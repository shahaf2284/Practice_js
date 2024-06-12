const axios = require("axios")

const URL = "https://jsonplaceholder.typicode.com/users"


const getUsersById = (id) =>{
    return axios.get(`${URL}/${id}`)
}

module.exports = {getUsersById}

