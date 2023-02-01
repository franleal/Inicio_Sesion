const compression = require('compression')
const {Router} = require('express')
const router = Router()
const logger = require('../helpers/log4js')
// const{infoRender} = require('../controllers/infoController')

// router.get('/api/info',infoRender)

router.get('/api/info', compression(), (req,res) =>{
    const {url,method} = req
    const mensaje = 'mensaje'
    const mensajeLargo = mensaje.repeat(1000)
    logger.info(`el mensaje fue comprimido en ${url} con el metodo ${method}` )
    console.log(mensajeLargo)
    res.send(mensajeLargo)
})


module.exports = router