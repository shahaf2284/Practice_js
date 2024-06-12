const axios = require("axios")
const url = "https://72vw44gf-8000.euw.devtunnels.ms/products"


const getProducts = () => {
    const res = axios.get(url)
    return res
}

const getProduct = (id) => {
    const res = axios.get(`${url}/${id}`)
    return res
}

module.exports = {getProducts, getProduct}