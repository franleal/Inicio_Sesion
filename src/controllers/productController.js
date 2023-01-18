const productController = {}
const product = require('../models/productos')

productController.renderProduct = (req,res)=>{
    res.render('productos')
}

productController.addProduct = async (req,res)=>{
    const {title,price,thumbnail} = req.body
    const newProduct = new product({title , price,thumbnail})
    await newProduct.save()
}


module.exports = productController 