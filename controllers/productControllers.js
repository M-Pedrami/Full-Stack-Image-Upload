const Product = require("../models/product");
const User = require("../models/user");
const addProduct = async (req, res) => {
  try {
    const { name, price, image, owner } = req.body;
    const response = await Product.create({ name, price, image, owner });
    res.send({ message: "New Product Added", response });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong adding a Product" });
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const response = await Product.find().populate("owner");
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong getting all the products" });
    console.log(error);
  }
};
module.exports = { addProduct, getProducts };
