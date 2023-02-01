const log4js = require('log4js')

log4js.configure({
    appenders:{
        consola:{type:'console'},
        archivoErrores:{type:'file',filename: 'error.log'},
        archivoWarning:{type:'file',filename:'warn.log'},
        loggerConsola:{type:'logLevelFilter',appender:'consola',level:'info'},
        loggerErrores:{type:'logLevelFilter',appender:'archivoErrores',level:'error'},
        loggerWarning:{type:'logLevelFilter',appender:'archivoWarning',level:'warn'}
    },
    categories:{
        default:{
            appenders:['loggerConsola'],level:'all'
        },
        prod:{
            appenders:['loggerErrores','loggerWarning'], level:'all'
        }
    }
})

let logger = null

if (process.env.LOGGER_ENV === 'PROD'){
    logger = log4js.getLogger('prod')
}else{
    logger = log4js.getLogger()
}

module.exports = logger