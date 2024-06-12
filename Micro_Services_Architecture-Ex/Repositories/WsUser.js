const axios = require("axios")

Url = "https://jsonplaceholder.typicode.com/users"


const getNameAndEmail = (username) =>
{
    return axios.get(`${Url}/?username=${username}`)
}

module.exports  = {getNameAndEmail}





