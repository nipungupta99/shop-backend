import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  heroImageURL: String,
  galleryImages: [String],
  stockQuantity: Number,
  category: String,
  brand: String,
  price: { type: Number  },
  discountedPrice: { type: Number },
});

const productModel = mongoose.model("product", productSchema);

export default productModel

