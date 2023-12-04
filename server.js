require("dotenv/config");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const connectDB = require("./database/db");
require('colors')
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");


connectDB()

//Middlewares
app.use(cors());
app.use(express.json());


//Routes
app.use("/users", userRouter);
app.use("/products", productRouter )

app.get("/", (req, res) => {
  res.send({ message: "Server is Running" });
});

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`.rainbow)
);
