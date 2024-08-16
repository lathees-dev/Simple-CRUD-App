
const express = require('express')
const Product = require("../models/product.models")
const router = express.Router()
const {getProducts,getProduct,updateProduct,createProduct,deleteProduct} = require("../controllers/product.controller")

// get all the products
router.get('/', getProducts);

// get single product
router.get('/:id',getProduct);

// create the product 
router.post('/',createProduct);

// updating product
router.put('/:id',updateProduct);

// delete product
router.delete('/:id',deleteProduct);

module.exports=router;