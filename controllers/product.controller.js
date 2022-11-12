export const getAllProducts = (req, res, next) => {
    res.send('All products list')
 }
 
 export const getSpecificProduct = (req, res, next) => {
     res.send('product desc')
 }

 export const getProductCategories = (req, res, next) => {
    res.send('your categories here')
 }


 export const searchProducts = (req, res, next) => {
    res.send('product search results')
 }

  export const createProduct = (req, res, next) => {
    res.send('product Created')
 }
 
 export const updateProduct = (req, res, next) => {
    res.send('product updated')
 }
 
 export const deleteProduct = (req, res, next) => {
    res.send('Product Deleted')
 }
