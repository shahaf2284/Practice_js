const productModel = require("../models/productsModel")




// ------------- Get Request -------------

const getAllProduct = async () => {
    const products = await productModel.find({})
    return products
}

const getProductByName = async (Name) => {
    const product = await productModel.find({name : Name})
    // const product = products.find((elem)=>
    //                         elem.productName===Name)
    return product
}

const getProductById = async (id) => {
    const product = await productModel.find({productID : id})
    return product
}



//-----------------------------------------------------------------

//-------------Post Request-------------

const creatProduct = async (newProduct) => {
    const Product = new productModel(newProduct)
    await Product.save()
    return "Created ...."
}

//-------------Put Request-------------

const updatePoduct = async (id, newProduct) => {
    const product = await getAllProduct()
    await productModel.findByIdAndUpdate(product._id, newProduct)
    return "Updated ...."
}


//-------------Deleted Request-------------

const DeletedPoduct = async (id) => {
    const product = await getProductById(id)
    await productModel.findByIdAndDelete(product[0]._id)
    return "Deleted ...."
}


module.exports = {getAllProduct, getProductByName, getProductById, creatProduct,updatePoduct,DeletedPoduct}