const axios = require("axios") 
const url = "https://fakestoreapi.com/products"  



// GET Request - GET all and GET by id
const getAllProduct = () =>{
    const res = axios.get(url)
    return res   
    }

const getProductById = (id) =>{
    const res = axios.get(`${url}/${id}`)
    return res
}

module.exports = {getAllProduct, getProductById}