const {Router} = require('express')
const router = Router()

const{renderIndex} = require('../controllers/indexController')

router.get('/', renderIndex )

module.exports = router