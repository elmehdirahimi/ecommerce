import express from "express";
import orderModel from "../modles/orderModel";
import Product from "../modles/productModel";
import { isAuth } from "../util/util";
import { array } from "joi";
const multer = require("multer");

const router = express.Router();

const checkProducts = async (productsIDs, productsQty) => {
  for (let i = 0; i < productsIDs.length; i++) {
    const product = await Product.findOne({ _id: productsIDs[i] });
    if (product) {
      if (productsQty[i] <= 0 || product.countInStock < productsQty[i])
        return false;
    } else {
      return false;
    }
  }
  for (let i = 0; i < productsIDs.length; i++) {
    const product = await Product.findOne({ _id: productsIDs[i] });
    product.countInStock -= productsQty[i];
    await product.save();
  }
  return true;
};

router.post("/", async (req, res) => {
  const products = await checkProducts(
    req.body.productsIDs,
    req.body.productsQty
  );
  if (products) {
    const newOrder = new orderModel({
      productsIDs: req.body.productsIDs,
      productsQty: req.body.productsQty,
      nom: req.body.nom,
      prenom: req.body.prenom,
      numero: req.body.numero,
      email: req.body.email,
      livraison: req.body.livraison,
    });
    const newOrderCreated = await newOrder.save();

    res
      .status(201)
      .send({ message: "New Order Created", data: newOrderCreated });
  } else {
    res
      .status(404)
      .send({ message: "Product Not Found or quantity not allowed." });
  }
});

router.get("/orders", isAuth, async (req, res) => {
  const orders = await orderModel.find({});
  res.send(orders);
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/uploadImage", isAuth, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});


router.post("/uploadProduct", isAuth, async (req, res) => {

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res.status(201).send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});


export default router;
