import { createContext, useState } from "react";
import {GetProductData} from "../data/Data"
export const CartContext = createContext({
  items: [],
  getproductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  function getproductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addItemToCart(id) {
    const quantity = getproductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id;
      })
    );
  }

  function removeItemFromCart(id) {
    const quantity = getproductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      cartProducts.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  }
  function getTotalAmount() {
    let totalAmount = 0;

    cartProducts.map((item) => {
      const productData = GetProductData(item.id);

      totalAmount += productData.price * item.quantity;
    });
  }
  const ContextValue = {
    items: cartProducts,
    getproductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
