import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, INCREMENT } from "../Types";
import React, { useState } from "react";
// export const sumItems = (cartItems) => {
//   const Storage = (cartItems) => {
//     localStorage.setItem(
//       "cartItems",
//       JSON.stringify(cartItems.length > 0 ? cartItems : [])
//     );
//   };
//   Storage(cartItems);
//   let itemCount = cartItems.reduce(
//     (total, product) => total + product.quantity,
//     0
//   );
//   let total = cartItems
//     .reduce((total, product) => total + product.price * product.quantity, 0)
//     .toFixed(2);
//   return { itemCount, total };
// };
const CartReducer = (state, action, id) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      const tempstate = state.cartItems.filter(
        (item) => action.payload.id === item.id
      );
      if (tempstate.length > 0) {
        return state;
      } else {
        return {
          ...state,

          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          
        };
      }
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    // case INCREASE:
    //   const quantity = state.cartItems.find(
    //     (item) => item.id === action.payload
    //   );
    //   console.log("gt" + quantity);
    //   if (quantity === 0) {
    //     return [...state, { id: id, quantity: 1 }];
    //   } else {
    //     return {
    //       ...state,
    //       cartItems: [
    //         ...state.cartItems.map((item) =>
    //           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    //         ),
    //       ],
    //     };
    //   }
    //   case UPDATE_QUANTITY:
    //     return {
    //       ...state,
    //       cartItems: state.cartItems.map(item => {

    //           default:
    //             return item;

    //       }),
    // };

    case INCREMENT: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
