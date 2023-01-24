const {Router} = require('express')
const router = Router()

const{getRandom} = require('../controllers/randomController')

router.get('/api/randoms/:cant',getRandom)

module.exports = router