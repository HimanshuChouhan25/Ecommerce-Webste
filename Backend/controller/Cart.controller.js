const { default: mongoose } = require('mongoose');
const cartSchemaModel = require('../models/cart.model')

const cartAllProducts = async (req, res) => {
  console.log(req.body.user_id);
  try {
    // let cartProducts=await cartSchemaModel.find({user_id:req.body.user_id})

    const findAddedProducts = async (userId, productId) => {

      const pipeline = [
        {
          $match: {
            user_id: userId // Match user by ID
          },

            },
         {
           $lookup: {
            from: 'products',          // Name of the collection to join
            localField: 'product_id',        // Field in the current collection
            foreignField: 'p_id',      // Field in the 'product' collection
            as: 'productDetails'      // Alias for the result
          }
        },
         {
    $unwind: '$productDetails'     // Flatten the productDetails array
  }
      
      ];

      const cartProducts = await cartSchemaModel.aggregate(pipeline);
      // const cartProducts = await User.aggregate(pipeline);
      if (cartProducts.length > 0) {
        console.log('Added product details:', cartProducts.productDetails);
      }

      // 
      res.status(200).json({ data: cartProducts })
    }
    findAddedProducts(req.body.user_id, null)
    // cartSchemaModel.find({user_id:req.body.user_id}).then((data)=>{
    //     res.status(200).json({data:data})
    // })
  }
  catch (e) { console.log(e); }


}

const addProducts = async (req, res, next) => {
  try {
    console.log(req.body, "add product");

    cartSchemaModel.create(req.body)
  } catch (e) { console.log(e); }
  res.status(200).json({ data: req.body })
}

const updateQuantity = async (req, res) => {
  try {
    const { cartItemId, quantity } = req.body
    // console.log(req.body,"add product");
    const update = await cartSchemaModel.findOneAndUpdate({ _id: cartItemId },
      {
        quantity: quantity
      },
      { new: true }
    )
    console.log(update);

    function formatCartItem(updated) {
      const obj = updated.toObject();
      obj.cartItemId = obj._id;
      delete obj._id;
      return obj;
    }

    res.status(200).json({ data: formatCartItem(update) })
  } catch (e) { console.log(e); }

}

module.exports = { cartAllProducts, addProducts, updateQuantity }