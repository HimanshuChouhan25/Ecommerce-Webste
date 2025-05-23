const express=require('express')
const router=express.Router();
const productController=require('../controller/product.controller');


router.get("/",productController.getAllProducts);
router.post("/add",
    // Upload route
    productController.upload.array('p_image')
    ,productController.addProduct);


module.exports =router;