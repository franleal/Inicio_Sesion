const {Router} = require('express')
const router = Router()

const{infoRender} = require('../controllers/infoController')

router.get('/api/info',infoRender)

module.exports = router