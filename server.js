const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const routes = require("./routes");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
let config;
if(process.env.MONGODB_URI) {
  config = process.env
} else {
  config = require("./config/index");
}

mongoose.connect(process.env.MONGODB_URI || config.dbUri);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Connect on port: ${PORT}!`);
})