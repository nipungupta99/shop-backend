import productModel from "../models/product.js"

export const getAllProducts = async(req, res, next) => {
   const allProducts  = await productModel.find({});
   res.json(allProducts);

   //userModel.find with uid 

 }
 
 export const getSpecificProduct = (req, res, next) => {
     res.send('product desc')
 }

 export const getProductCategories = async(req, res, next) => {
    
 }


 export const searchProducts = (req, res, next) => {
    res.send('product search results')
 }

  export const createProduct = async (req, res, next) => {
    const newProduct = new productModel({
      ...req.body
    })
    await newProduct.save();
    res.send(newProduct)
 }
 
 export const updateProduct = (req, res, next) => {
    res.send('product updated')
 }
 
 export const deleteProduct = (req, res, next) => {
    res.send('Product Deleted')
 }
