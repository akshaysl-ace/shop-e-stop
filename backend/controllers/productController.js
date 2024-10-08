import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js";

// @desc  Fetch all products
// @route  GET api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
    console.log("get productss")
    const products = await Product.find({});
    return res.json(products || []);
});


// @desc  Fetch a product by id
// @route  GET api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) return res.json(product);
    else {
        res.status(404);
        throw new Error('Resource not found');
    }
});
