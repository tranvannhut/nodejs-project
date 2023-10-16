const path = require("path");
const express = require("express");
// config template engine
const configViewEngine = (app) => {
  console.log(">>>> Check _dirname", __dirname);
  console.log(">>>> Check _dirname", path.join("./src", "views"));
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  // config static file : image/css/js
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
