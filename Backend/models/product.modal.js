const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
p_name:String,

p_id:{type:Number,unique:true},
p_price:Number,
p_description:String,
p_company:String,
p_images:[String],

})

const productSchemaModel=mongoose.model("products",productSchema);
module.exports=productSchemaModel;