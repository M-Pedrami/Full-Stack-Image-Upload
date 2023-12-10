const cloudinary = require("cloudinary").v2;
const Product = require("../../models/product")

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const deleteUploadedImage = async (req, res, next) => {
  try {
    const { id } = req.params; // Extracting the product id from the request parameters
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    const { public_id } = product;

    if (!public_id) {
      return res.status(400).send({ message: "Invalid or missing public id" });
    }

    const result = await cloudinary.uploader.destroy(public_id);

    if (result.result === "ok") {
      next();
    } else {
      res.status(500).send({ message: "Error deleting from cloudinary" });
    }
  } catch (error) {
    console.error("Error in deleteUploadedImage middleware:", error);
    res.status(500).send({
      message: "Something went wrong deleting the asset from cloudinary",
    });
  }
};


module.exports = deleteUploadedImage;