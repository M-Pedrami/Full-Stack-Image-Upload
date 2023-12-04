const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");
const PORT = process.env.PORT;
const mongoose = require("./database/db")

//Middlewares
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
  res.send({message : "Server is Running"})
});

app.listen(PORT, ()=>console.log(`server is listening on http://localhost:${PORT}`))