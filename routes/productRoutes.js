const express = require("express");
const uploadImage = require("../middlewares/multer/uploadImage")
const productRouter = express.Router();
const {
  addProduct,
  getProducts,
  testUpload
} = require("../controllers/productControllers");

productRouter.route("/").get(getProducts).post(addProduct);
productRouter.post("/test", uploadImage.single("image"), testUpload)

module.exports = productRouter;
