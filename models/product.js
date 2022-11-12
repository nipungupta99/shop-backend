import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  heroImageURL: String,
  galleryImages: [String],
  sku: String,
  stockQuantity: Number,
  category: String,
  brand: String,
  type: { type: String, enum: ["simple", "variable"] },
  price: { type: Number },
  discountedPrice: { type: Number },
  variations: [{ name: String, price: Number, discountedPrice: Number , heroImageUrl:String }],
});

const productModel = mongoose.model("product", productSchema);

export default productModel

