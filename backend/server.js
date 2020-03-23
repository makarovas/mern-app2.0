const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");

const app = express();

const DUMMY_PRODUCTS = [];

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
});
