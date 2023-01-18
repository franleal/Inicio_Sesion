const {Router} = require('express')
const router = Router()

const{renderProduct,addProduct} = require('../controllers/productController')

router.get('/api/productos',renderProduct)

router.post('/api/productos',addProduct)

module.exports = router