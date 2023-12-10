const Product = require("../models/product");
const User = require("../models/user");
require("colors");

const addProduct = async (req, res) => {
  try {
    const { name, price, owner } = req.body;
    const { path, filename } = req.file;
    const response = await Product.create({ name, price, image: path, owner, public_id: filename });
    res.send({ message: "New Product Added", response });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong adding a Product" });
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const response = await Product.find();
    res.send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong getting all the products" });
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const response = await Product.findByIdAndDelete({ _id: id });
    if(!response){
      res.send({message : `no product found with the id of ${id}`})
    } else
   { res
      .status(200)
      .send({
        message: `the product with the id of ${id} deleted`,
        data: response,
      });}
  } catch (error) {
    res
      .status(500)
      .send({message: `something went wrong deleting the product`});
      console.log(error)
  }
};

const testUpload = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
};
module.exports = { addProduct, getProducts, testUpload, deleteProduct };
