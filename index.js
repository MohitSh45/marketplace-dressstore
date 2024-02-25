require("./model/db");

const express = require("express");
const cors = require("cors");
const productController = require("./controller/product.controller");

// variables
const app = express();
const PORT = process.env.PORT || 3000;

//configurations
app.use(express.json());
app.use(cors());

// create a new product
app.post("/api/products", productController.create);

// get all products
app.get("/api/products", productController.getAll);

// get a product by ID
app.get("/api/products/:id", productController.getById);

// update a product by Id
app.put("/api/products/:id", productController.update);

// delete a product by ID
app.delete("/api/products/:id", productController.deleteProduct);

// delete all product
app.delete("/api/products", productController.deleteAll);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
