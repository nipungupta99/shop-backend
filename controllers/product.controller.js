import productModel from "../models/product.js"

export const getAllProducts = async (req, res, next) => {
   try {
      const allProducts = await productModel.find({});
      res.status(200).json(allProducts);
   } catch (err) {
      res.status(400).json({ message: 'Error Fetching products', details: err })
   }
}

export const getSpecificProduct = async (req, res, next) => {
   try {
      const product = await productModel.findOne({ _id: req.params.id })
      res.status(200).send(product)
   } catch (err) {
      res.status(400).json({ message: 'Error fetching details', details: err })
   }
}

export const getProductCategories = async (req, res, next) => {
   await productModel.find().populate('category').exec((err, product) => { 
      console.log(err);
      res.send(product)
    })
}

export const searchProducts = async (req, res, next) => {
   console.log(req.body.input);
   const searchedData = await productModel.find( { $text: { $search: req.body.input } } );
   res.send(searchedData)
}

export const createProduct = async (req, res, next) => {
   const newProduct = new productModel({
      ...req.body
   })
   await newProduct.save();
   res.send(newProduct)
}

export const updateProduct = async (req, res, next) => {
   try{
      const updated = await productModel.updateOne({ _id: req.params.id }, {
         name: req.body.name,
         description: req.body.description,
         stockQuantity: req.body.stockQuantity,
         price: req.body.price,
         discountedPrice: req.body.discountedPrice
      });
      res.status(200).json(updated)
   }catch(err) {
      res.status(400).send(err)
   }
}

export const deleteProduct = async (req, res, next) => {
   const deleted = await productModel.deleteOne({ _id: req.params.id });
   console.log(deleted);
   if (deleted.deletedCount == 1) {
      res.status(200).send("Product Deleted Successfully")
   } else {
      res.status(400).send(deleted)
   }
}
