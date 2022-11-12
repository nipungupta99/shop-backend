import express from 'express';
import { getAllProducts, getSpecificProduct, getProductCategories, searchProducts, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';
const router = express.Router();


// Show Specific Category's Products & Search
router.post("/category", getProductCategories);
router.post("/search", searchProducts);


// Product Routes
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getSpecificProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;


