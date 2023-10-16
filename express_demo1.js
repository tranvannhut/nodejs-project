require("dotenv").config();
var express = require("express");
var fs = require("fs");
var app = express();
console.log(">>> check env: ", process.env);
const port = process.env.PORT || 8080;

// config template engine
app.set("views", "./");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("Process file envs : ", port);
  res.send("Hello word");
});
app.get("/login", (req, res) => {
  res.send("Login success");
});

app.listen(port, () => {
  console.log(`Please access link on port ${port} `);
});
