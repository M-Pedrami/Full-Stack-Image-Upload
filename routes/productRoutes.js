const express = require("express");
const productRouter = express.Router();
const {
  addProduct,
  getProducts,
} = require("../controllers/productControllers");

productRouter.route("/").get(getProducts).post(addProduct);

module.exports = productRouter;
