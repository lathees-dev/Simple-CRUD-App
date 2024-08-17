// Initializing variables
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION
const Product = require("./models/product.models.js");
const productRoutes = require("./routes/product.route.js");

// initialize middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use("/api/products",productRoutes)

// GET methods
app.get("/", (req, res) => {
  res.send("Welcome to the page");
});

// DB connection
mongoose
  .connect(CONNECTION)
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log("The application is running in port "+PORT);
    });
  })
  .catch(() => {
    console.log("connection failed");
  });

// fetching data from db
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// // fetching particular item by id
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// //updating record
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const products = await Product.findByIdAndUpdate(id, req.body);

//     if (!products) {
//       return res.status(4004).json({ message: "Data not found" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Deleting the record
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id }=req.params
//     const product=await Product.findByIdAndDelete(id);
//     if(!product){
//       return res.status(404).json({message:"Product not found"})
//     }
//     res.status(200).json({message:"Product Deleted Successfully..."})
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // POST methods (creating docs)
// app.post("/api/products", async (req, res) => {
//   try {
//     // const product = await Product.create(req.body)
//     // res.status(200).json(product)
//     const item = new Product({
//       name: req.body.name,
//       quantity: req.body.quantity,
//       price: req.body.price,
//     });
//     await item.save().then(() => {
//       res.status(200).json(item);
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

