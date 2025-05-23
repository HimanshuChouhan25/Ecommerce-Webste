const express=require("express")
const cartController=require('../controller/Cart.controller')
const router=express.Router();

router.post('/cart-products',cartController.cartAllProducts);
router.post('/add-product',cartController.addProducts);

module.exports=router