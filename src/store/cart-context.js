import React from "react";

const CartContext = React.createContext({
  cartIsShown: false,
  items: [],
  totalAmount: 0,
  onShowCart: () => {},
  onHideCart: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
