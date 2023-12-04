const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");
const PORT = process.env.PORT;
const mongoose = require("./database/db");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const uploadImageMiddleware = require("./middlewares/multer/uploadImage")

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"))
app.use("/products", uploadImageMiddleware)

//Routes
app.use("/users", userRouter);
app.use("/products", productRouter )

app.get("/", (req, res) => {
  res.send({ message: "Server is Running" });
});

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
