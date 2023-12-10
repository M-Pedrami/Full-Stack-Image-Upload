const express = require("express");
const uploadImage = require("../middlewares/multer/uploadImage")
const deleteImage = require("../middlewares/multer/deleteUploadedImage")
const productRouter = express.Router();
const {
  addProduct,
  getProducts,
  testUpload,
  deleteProduct
} = require("../controllers/productControllers");

productRouter.route("/").get(getProducts).post(uploadImage.single("image"),addProduct);

productRouter.delete("/:id",deleteImage, deleteProduct)
productRouter.post("/test", uploadImage.single("image"), testUpload)

module.exports = productRouter;

