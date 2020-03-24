const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

const app = express();

const DUMMY_PRODUCTS = [];

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,  Content-Type, Accept ,Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/products", (req, res, next) => {
  res.status(200).json({ products: DUMMY_PRODUCTS });
});

app.post("/products", (req, res, next) => {
  const { title, price } = req.body;
  if (!title || title.trim().length === 0 || !price || price <= 0) {
    return res.status(422).json({ message: "Invalid" });
  }
});

const createProduct = {
  id: uuid(),
  title,
  price
};

DUMMY_PRODUCTS.push(createProduct);

res
  .status(201)
  .json({ message: "Created new product", product: createProduct });

app.listen(5000);
