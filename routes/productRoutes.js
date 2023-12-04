const express = require("express");
const productRouter = express.Router();
const addProduct = require("../controllers/productControllers")

productRouter.post("/", addProduct)

module.exports = productRouter