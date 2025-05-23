const { default: mongoose } = require('mongoose');
const cartSchemaModel=require('../models/cart.model')

const cartAllProducts=async (req,res,next)=>{
    console.log(req.body.user_id);
    try{
    // let cartProducts=await cartSchemaModel.find({user_id:req.body.user_id})

    const findAddedProducts = async (userId, productId) => {
      
        const pipeline = [
          {
            $match: {
              user_id: userId // Match user by ID
            },
          },
        //   {
        //     $unwind: "$cart" // Unwind the cart array to access each product document
        //   },
          // {
          //   $match: {
          //     "cartSchemaModel.product_id": mongoose.Types.ObjectId(productId) // Match product ID within cart
          //   }
          // },
          // {
          //   $lookup: {
          //     from: 'Products', // Replace with your product collection name
          //     localField: "cartSchemaModel.product_id",
          //   //   `${cartSchemaModel.product_id}`
          //     foreignField: "p_id",
          //     as: "productDetails"
          //   }
          // },
        //   {
        //     $project: {
        //       _id: 0, // Exclude user ID from output (optional)
        //       userId: "$_id",
        //       product: { $first: "$productDetails" } // Get the first product document from lookup
        //     }
        //   }
        ];
    
        const addedProduct = await cartSchemaModel.aggregate(pipeline);
        // const addedProduct = await User.aggregate(pipeline);
        if (addedProduct.length > 0) {
          console.log('Added product details:', addedProduct.productDetails);
        }

// 
      res.status(200).json({data:addedProduct})
    }
    findAddedProducts(req.body.user_id,null)
}
    catch(e){console.log(e);}

    
}
const addProducts=async (req,res,next)=>{
    try{
        cartSchemaModel.create(req.body)
    }catch(e){console.log(e);}
    res.status(200).json({data:req.body})
}
module.exports={cartAllProducts,addProducts}