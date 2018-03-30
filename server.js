const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = module.exports = express();

app.use(express.static('app/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cors());