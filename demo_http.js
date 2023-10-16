var http = require("http");
var express = require("express");
var app = express();
const hostname = "127.0.0.1";
const port = 8081;
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world1 \n");
  })
  .listen(port);
// var server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello world2 \n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}`);
// });

// Console will print the message
// console.log("Server running at http://127.0.0.1:8081/");
