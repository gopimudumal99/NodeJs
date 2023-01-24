const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.json()); //! i don't no it will be not working here

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
  //   console.log("In another middle");
  res.send(
    "<div><h1>The add product page</h1><form action='/product' method='POST'> <input type='text' name='title'/> <button type='submit'>Add Product</button></form> </div>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(">>>>", req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("In another middle");
  res.send("<h1>Hello form Express!</h1>");
});

// const server = http.createServer(app);
// server.listen(3001);
app.listen(3001);
