import { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = (props) => {
  const [itemsState, setItemsState] = useState([
    // {
    //   title: "Colors",
    //   price: 100,
    //   imageUrl:
    //     "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    //   quantity: 1,
    // },
    // {
    //   title: "Black and white Colors",
    //   price: 50,
    //   imageUrl:
    //     "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    //   quantity: 1,
    // },
    // {
    //   title: "Yellow and Black Colors",
    //   price: 70,
    //   imageUrl:
    //     "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    //   quantity: 1,
    // },

    // {
    //   title: "Blue Color",
    //   price: 100,
    //   imageUrl:
    //     "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    //   quantity: 1,
    // },
  ]);
  const addItem = (item) => {
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
      console.log(newItems);
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
