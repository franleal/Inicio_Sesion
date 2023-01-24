const { render } = require("../server")

const randomController = {}



randomController.getRandom = (req,res) => {
    const cant = parseInt(req.params.cant)
    var c = 0
    randoms = []
    while(c<=cant){
        const aleatorio = Math.random() * (1000 - 1) + 1
        randoms.push(aleatorio)
        c+=1
    }

    res.render('randoms',{
        random:randoms,
        title:'numeros randoms'
    })
}

module.exports = randomController
