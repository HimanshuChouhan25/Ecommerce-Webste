const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    Name:String,
    Surname:String,
    email:{
        type:String,
        unique:true,
        required:true,

    },
    password:String,
    role:String
})

const userModel=mongoose.model('users',userSchema);
module.exports=userModel;