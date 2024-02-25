const ProductService = require("../service/product.service");

const create = async (req, res) => {
  try {
    const product = await ProductService.create(req.body);
    return res.status(201).json({ product, message: "success" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || " unable to create product" });
  }
};

const getAll = async (req, res) => {
  try {
    let products = [];
    const name = req.query.name;

    if (name) {
      products = await ProductService.searchProductsByName(name);
    } else {
      products = await ProductService.getAll();
    }
    return res.json({ products, message: "success" });
  } catch (error) {
    return res.status(500).json(error.message || "unable to get products");
  }
};

const getById = async (req, res) => {
  try {
    const product = await ProductService.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json(error.message || "unable to get product");
  }
};


const update = async (req, res) => {
  try {
    let product = await ProductService.getById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    product = await ProductService.update(product.id, req.body);

    return res.json({ product, message: "success" });
  } catch (error) {
    return res.status(500).json(error.message || "unable to update product");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await ProductService.getById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    await ProductService.deleteProduct(product.id);

    return res.json({ product, message: "success" });
  } catch (error) {
    return res.status(500).json(error.message || "unable to delete");
  }
};

const deleteAll = async (req, res) => {
  try {
    await ProductService.deleteAll();
    return res.json({ message: "success" });
  } catch (error) {
    return res.status(500).json(error.message || "unable to delete");
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteProduct,
  deleteAll,
};
