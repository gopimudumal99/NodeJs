const path = require("path");
const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

// /admin/add-product =>get
router.get("/add-product", (req, res, next) => {
  //   console.log("In another middle");

  //   res.send(
  //     "<div><h1>The add product page</h1><form action='/admin/product' method='POST'> <input type='text' name='title'/> <button type='submit'>Add Product</button></form> </div>"
  //   );

//   res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
res.sendFile(path.join(rootDir, "views", "add-product.html"));

});

// /admin/product => post
router.post("/product", (req, res, next) => {
  console.log(">>>>", req.body);
  res.redirect("/");
});

module.exports = router;
