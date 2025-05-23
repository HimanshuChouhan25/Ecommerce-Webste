const mongoose=require('mongoose');

const tokenSchema=mongoose.Schema({
token:{type:String,required:true,},
date:{type:Date},
user:{type:String},
})

const tokenSchemaModel= mongoose.model('token',tokenSchema);
module.exports=tokenSchemaModel