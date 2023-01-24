const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const router = express.Router();

router.get("/", (req, res, next) => {
  //   res.sendFile("/views/shop.html");  //! this actually point to the root folder in over os
  // dirname in this file folder is root
  //   res.sendFile(path.join(__dirname,'..', "views", "shop.html"));
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
