const mongoose=require('mongoose')
// const conneection=require('../connection')

const cartSchema=mongoose.Schema({
    product_id:String,
    user_id:String,
    quantity:Number,
})
const cartSchemaModel=mongoose.model('cart',cartSchema)
module.exports=cartSchemaModel