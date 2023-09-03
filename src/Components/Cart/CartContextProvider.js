import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [itemsState, setItemsState] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ]);
  const addItem = (item) => {};

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
