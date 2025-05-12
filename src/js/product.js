import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cart = [];
  try 
  {
    cart = JSON.parse(localStorage.getItem("so-cart"));

    // Checks to see if cart is null or not an array
    // If so, set it to an empty array
    if(!Array.isArray(cart)) {
      cart = [];
    }
  } 
  catch (error) {
    cart = [];
  }
  cart.push(product);
  setLocalStorage("so-cart", cart);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
