const http = require("http");
const express = require("express");

const app = express();

/** app.use((req, res, next) => {
  console.log("In the middle");
  next(); //!  allows the request to continue to the next middleware in line
});
*/

app.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("In another middle");
  res.send("<h1>The add product page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In another middle");
  res.send("<h1>Hello form Express!</h1>");
});

// const server = http.createServer(app);
// server.listen(3001);
app.listen(3001);
