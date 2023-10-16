require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const mysql = require("mysql2");
const app = express();
const port = process.env.PORT || 8080;

// config template engine
configViewEngine(app);

// declare routes
app.use("/", webRouter);
// create connect with database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, // default 3306
  user: "root", // default " ""
  password: "747767",
  database: "nhuttran",
});
// simple query
connection.query("SELECT * FROM USER", function (err, results, fields) {
  console.log("Hello");
  console.log(">>> Result = ", results); // results contains rows returned by server
  // console.log(">>> Fields = ", fields); // fields contains extra meta data about results, if available
});
// with placeholder
/* connection.query(
  "SELECT * FROM USER WHERE name = ? ",
  ["Demo1"],
  function (err, results) {
    console.log(results);
  }
); */
app.listen(port, () => {
  console.log(`Please access link on port ${port} `);
});
