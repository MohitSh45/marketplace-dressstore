const Product = require("../model/product");

module.exports = {
  create: async (productData) => {
    try {
      const newProduct = new Product(productData);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      throw error;
    }
  },
  getAll: async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw error;
    }
  },
  getById: async (productId) => {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      throw error;
    }
  },
  searchProductsByName: async (keyword) => {
    try {
      const regex = new RegExp(keyword, 'i');
      const products = await Product.find({ name: regex });
      return products;
    } catch (error) {
      throw error;
    }
  }, 
  update: async (productId, newData) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        newData,
        {
          new: true,
        }
      );
      return updatedProduct;
    } catch (error) {
      throw error;
    }
  },
  deleteProduct: async (productId) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      return deletedProduct;
    } catch (error) {
      throw error;
    }
  },
  deleteAll: async () => {
    try {
      await Product.deleteMany();
      return;
    } catch (error) {
      throw error;
    }
  },
};
