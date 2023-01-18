const{Schema,model}= require('mongoose')


const ProductSchema = new Schema({
    title: {type: String, require: true, max: 100},
    price: {type: Number, require: true},
    thumbnail: {type: String, require: true, max: 100},
})

module.exports = model('products',ProductSchema)