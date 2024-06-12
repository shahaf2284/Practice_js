const axios = require("axios")

UrlTodo = "https://jsonplaceholder.typicode.com/todos"


const getTodos = async (id) =>
{
    return axios.get(`${UrlTodo}`)
}

module.exports  = {getTodos}

