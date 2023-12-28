import { useReducer, useState } from "react";

import CartContext from "./CartContext";

import CartReducer from "./CartReducer";

import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INCREMENT } from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
    total_item: "",
    total_amount:""
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const incerement = (id, quantity) => {
    dispatch({ type: INCREMENT, payload: { id, quantity } });
  };

  const updateQuantity = (id, action) => {
    switch (action) {
      case "increment":
        state.cartItems.find((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        console.log("hello");

        break;
      case "decrement":
        state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantit - 1 } : item
        );

        break;
      default:
        console.error("Invalid action provided to updateQuantity function");
    }
  };
  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        incerement,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
