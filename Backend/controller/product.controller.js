 const productSchemaModel=require("../models/product.modal")
 const connection=require("../connection")
 const multer = require('multer');


// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate unique filename
  }
});

const upload = multer({ storage: storage });

 const getAllProducts=async (req,res,next)=>{
    const products=  await  productSchemaModel.find()
     console.log(products);
     res.status(200).json({data:products})
}
 const addProduct=async (req,res,next)=>{
  console.log(req.body);

    try {
      if (!req.files) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      // Handle the uploaded file (e.g., save to database, resize, etc.)
      console.log('File uploaded successfully:', req.files);

        const {p_name,p_description,p_price,p_id} = req.body
  if(!p_description||!p_price||!p_id||!p_name){
      res.status(400).json({message:"bad Request" }  )
  }else{
   try{
    const p_data={
      p_name:p_name,
      p_description:p_description,
      p_price:p_price,
      p_id:p_id,
    }
    console.log(p_description,p_name,p_price,p_id);
    
    let imagePath=[]
    const images= await req.files.map((obj)=>{
      imagePath.push(obj.filename)
      return obj.filename
    })
    console.log(images+"image path");
     await productSchemaModel.create({...p_data,p_images:images})
     res.status(200).json({message:"data inserted successfully",data:req.body})
   }catch(e){
    console.log(e);
    res.status(500).json({message:e})
   }
  }
    //  res.status(500).json({data:req.body})

  
      // res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error uploading file' });
    }
  
 
}    //hatana hai
  // console.log(req.body);

  // const {p_name,p_description,p_price,p_id}=req.body
  // if(!p_description||!p_price||!p_id||!p_name){
  //     res.status(400).json({message:"bad Request" }  )
  // }else{
  //  try{
  //    await productSchemaModel.create(req.body)
  //    res.status(200).json({message:"data inserted successfully",data:req.body})
  //  }catch(e){
  //   console.log(e);
  //   res.status(500).json({message:e})
  //  }
  // }
    //  res.status(500).json({data:req.body})
// }


module.exports={getAllProducts,addProduct,upload}