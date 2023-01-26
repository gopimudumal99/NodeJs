const fs = require("fs");

const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addProduct(id, productPrice) {
    console.log(id, productPrice);
    //fetch the previous cart
    fs.readFile(p, (err, fileContact) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContact);
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updateProduct;

      //Add new product increase quantity
      if (existingProduct) {
        updateProduct = { ...existingProduct };
        updateProduct.qty = updateProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updateProduct;
      } else {
        updateProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updateProduct];
      }
      cart.totalPrice = cart.totalPrice + Number(productPrice);

      fs.writeFile(p, JSON.stringify(cart), (err) => {
        if (err) {
          console.log("model cart", err);
        }
      });
    });
  }

  static deleteProduct(id, productPrice) {
    fs.readFile(p, (err, fileContact) => {
      if (err) {
        return;
      }
      const updateCart = { ...fileContact };
      const product = updateCart.find((prod) => prod.id == id);
      const productQty = product.qty;
      updateCart.products = updateCart.products.filter(
        (prod) => prod.id != prod
      );
      updateCart.totalPrice = updateCart.totalPrice - productPrice * productQty;

      fs.writeFile(p, JSON.stringify(updateCart), (err) => {
        console.log("model cart", err);
      });
    });
  }

  static getCart(cb) {
    fs.writeFile(p, (err, fileContact) => {
      const cart = JSON.parse(fileContact);
      if (err) {
        cb(null);
      } else {
        cb(cart);
      }
    });
  }
};
