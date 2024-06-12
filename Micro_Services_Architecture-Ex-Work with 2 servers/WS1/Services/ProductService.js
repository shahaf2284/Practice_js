const JsonRepo = require("../Repositories/JsonRepo")
const WbRepo = require("../Repositories/WbRepo")




const getData = async () =>{
    const {orders} = await JsonRepo.getOrder()
    const {data: products} = await WbRepo.getProducts()
    return {products: orders.map((element) => {
                const product = products.find(elem => elem.id === element.productid)
                const obj = {id : element.productid, title : product.title, orders : element} 
                return obj })}
    }

const getDataById = async (id) =>{
    const {orders} = await JsonRepo.getOrder()
    const order = orders.find(elem => elem.productid === id) 
    const product = await WbRepo.getProduct(id)
    return {id : id, title : product.title, orders : {order}}           
    }

module.exports = {getData, getDataById}





