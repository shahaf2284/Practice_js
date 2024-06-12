const productRepo = require("../Repositories/productRepo")


const getProducts = async () =>{
    const {data: products} = await productRepo.getAllProduct()
    return products.map((elem) =>{ return {id : elem.id, title: elem.title}}) 
}

const getProduct = async (id) =>{
    const {data: product} = await productRepo.getProductById(id)
    return {id : product.id, title: product.title} 
}


module.exports = {getProducts, getProduct}






