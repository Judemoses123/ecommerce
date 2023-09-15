import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [itemsState, setItemsState] = useState([
  ]);
  const addItem = (item) => {
    console.log(item);
    setItemsState((prev) => {
      const found = prev.find((obj) => {
        return (obj.title === item.title)
      });
      if (found) {
        return prev.map((obj) => {
          console.log(obj, item);
          return obj.title == item.title
            ? { ...obj, quantity: obj.quantity + 1 }
            : obj;
        });
      }
      const newItems = [item, ...prev];
      return newItems;
    });
  };

  const removeItem = () => {};

  const contextvalues = {
    cartItems: itemsState,
    size: itemsState.length,
    addItems: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={contextvalues}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
