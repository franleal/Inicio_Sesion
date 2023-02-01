const infoController = {}

// infoController.infoRender = (req,res)=>{
//     const info = {
//         directorio: process.cwd(),
//         Id: process.pid,
//         version: process.version,
//         titulo: process.title,
//         sistop: process.platform,
//         memoria: process.memoryUsage()
//     }

//     res.render( 'info',{
//         info:info,
//         title: 'informacion'
//     })
// }

module.exports = infoController