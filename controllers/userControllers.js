const User = require("../models/user");

const addUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    const response = await User.create({ email, name });
    res.send({ message: "New User Created", response });
  } catch (error) {
    res.status(500).send({ message: "something went wrong add the User" });
    console.log(error);
  }
};

module.exports = addUser;
