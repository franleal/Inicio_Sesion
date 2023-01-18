require("dotenv").config()

const app = require('./server')
require('./database')
port = 8080


app.listen(port,() =>{
    console.log(`Servidor escuchado en http://localhost:${port}`)
})
app.on('error',err =>{
    console.log('Error en sercvidor',err)
})