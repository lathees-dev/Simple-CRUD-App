const Product = require("../models/product.models")

const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

const getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
  
      const products = await Product.findByIdAndUpdate(id, req.body);
  
      if (!products) {
        return res.status(4004).json({ message: "Data not found" });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const createProduct = async (req, res) => {
    try {
      // const product = await Product.create(req.body)
      // res.status(200).json(product)
      const item = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
      });
      await item.save().then(() => {
        res.status(200).json(item);
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const deleteProduct =  async (req, res) => {
    try {
      const { id }=req.params
      const product=await Product.findByIdAndDelete(id);
      if(!product){
        return res.status(404).json({message:"Product not found"})
      }
      res.status(200).json({message:"Product Deleted Successfully..."})
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports={
    getProducts,
    getProduct,
    updateProduct,
    createProduct,
    deleteProduct
};