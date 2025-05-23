const express=require('express');
const bodyParser=require('body-parser')
const productRouter=require('./routes/product.router')
const cartRouter=require('./routes/cart.router')
const userRouter=require('./routes/user.router')
const cors=require('cors');
const path = require('path');

const app=express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (for APIs)
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/product",productRouter)
app.use("/cart",cartRouter)
app.use("/user",userRouter)

app.listen(3001)
console.log("server invoked");