const {Schema, model} = require("mongoose");
const User = require("./user")

const productSchema = new Schema({
  name : {type : String, required: true},
  price : {type : Number, required: true, min: 0},
  image : {type: String, required: true},
  owner : {type: Schema.Types.ObjectId, ref: "User"},
  public_id : {type: String}
});

const Product = model("Product", productSchema);

module.exports = Product;