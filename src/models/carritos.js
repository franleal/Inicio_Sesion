const{Schema,model}= require('mongoose')

const CartSchema = new Schema({
    productos:{type:[], required:true}
})

module.exports = model('carts',CartSchema)