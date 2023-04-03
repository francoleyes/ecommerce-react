import React, { createContext, useState } from "react";
import { PRODUCT_CART } from "../utils/constants";

export const CartContext = createContext([]);

export function CartProvider(props) {
  const { children } = props;
  const [numItems, setNumItems] = useState(0);

  function getProductsCart() {
    const response = localStorage.getItem(PRODUCT_CART);
    return JSON.parse(response || "[]");
  }

  function addProductCart(id, title, price, quantity) {
    const productsInCart = getProductsCart();
    productsInCart.push([id, title, price, quantity]);
    localStorage.setItem(PRODUCT_CART, JSON.stringify(productsInCart));
    setNumItems(getNumIndividualItems(productsInCart));
  }

  function removeProductCart(id) {
    const productsInCart = getProductsCart();
    const filteredProducts = productsInCart.filter(product => product[0] !== id);
    localStorage.setItem(PRODUCT_CART, JSON.stringify(filteredProducts));
    setNumItems(getNumIndividualItems(filteredProducts));
  }
  

  function cleanProductCart() {
    localStorage.removeItem(PRODUCT_CART);
    setNumItems(0);
  }

  function getNumIndividualItems(products) {
    let numItems = 0;
    products.forEach((product) => {
      numItems += product[3];
    });
    return numItems;
  }

  const valueContext = {
    numItems,
    getProductsCart,
    addProductCart,
    removeProductCart,
    cleanProductCart,
  };

  return (
    <CartContext.Provider value={valueContext}>
      {children}
    </CartContext.Provider>
  );
}
