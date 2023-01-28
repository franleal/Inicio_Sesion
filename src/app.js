require("dotenv").config()

const app = require('./server')
const cluster = require('cluster')
require('./database')
const port = parseInt(process.argv[2]) || 8080
const numCPUs = require('os').cpus().length

if (cluster.isMaster && process.argv[2] == 'CLUSTER'){
    console.log(`Master${process.pid} is running`)

    for (let i = 0; i< numCPUs; i++){
        cluster.fork()
    }

    cluster.on('exit', worker =>{
        console.log(`Worker ${worker.process.pid} died`)
        cluster.fork()
    })

}else{

    app.listen(port,() =>{
        console.log(`Servidor escuchado en http://localhost:${port} - PID${process.pid}`)
    })
    app.on('error',err =>{
        console.log('Error en sercvidor',err)
    })

}


