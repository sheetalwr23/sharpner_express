const http = require("http");
const express = require("express");
const app = express();
// const server = http.createServer(app);
app.use((req, res, next) => {
  console.log("In the first middleware");
  next();
});
app.use((req, res, next) => {
  console.log("In the second middleware");
  res.send("<h1>Hello from express<h1>");
});
app.listen(3000);
