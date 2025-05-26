const express=require('express');
require('dotenv').config
const bodyParser=require('body-parser')
const productRouter=require('./routes/product.router')
const cartRouter=require('./routes/cart.router')
const userRouter=require('./routes/user.router')
const cors=require('cors');
const path = require('path');
const DBconnect = require('./connection');
const swaggerDocs = require('./swagger/swagger');

DBconnect()
const app=express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
swaggerDocs(app)

// Parse JSON bodies (for APIs)
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/product",productRouter)
app.use("/cart",cartRouter)
app.use("/user",userRouter)

app.listen(process.env.PORT)
console.log("server invoked");