const express = require("express");
import data  from "./data";
const dotenv =  require("dotenv");
import config from "./config";
// var cors = require('cors');
import bodyParser from 'body-parser';
import { sign } from "jsonwebtoken";
const mongoose = require("mongoose");
const app = express();
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import shopRoute from './routes/shopRoute';
dotenv.config();
const mongogb_url = config.MONGODB_URL;
const path = require("path");


mongoose.connect("mongodb+srv://elmehdi:rahimi1498@cluster0-tb4xh.mongodb.net/soukeljadida?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch((error) => console.log(error));


// app.use(cors());
app.use(bodyParser.json());
app.use('/api/user', userRoute);
app.use('/api/shop', shopRoute);
app.use('/api', productRoute);
app.use('/uploads', express.static('uploads'));

// app.get("/api/all", (req, res) => {
//   res.send(data.products);
// });

// app.get("/api/details/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = data.products.find((x => x._id === productId));
//   if (product) res.send(product);
//   else res.status(404).send({ msg: "product Not found" });
// });


// app.use(express.static("build"));
// app.get('*', (req,res) => {
//   res.sendFile(path.resolve(__dirname,'build','index.html'));
// } );


app.listen(5000, () => {
  console.log("server started");
});

