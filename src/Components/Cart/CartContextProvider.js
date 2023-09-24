import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { AuthContext } from "../Auth/AuthContext";
import { useContext } from "react";
const CartContextProvider = (props) => {
  const AuthCTX = useContext(AuthContext);
  const [itemsState, setItemsState] = useState([]);
  const id = String(AuthCTX.email);
  const idWithoutAt = id.replace("@", "");
  const idWithoutDot = idWithoutAt.replace(".", "");
  const identifier = idWithoutDot;
  const baseURL = `https://crudcrud.com/api/b81ea6d696b742139a9e5b717ddd4a50`;
  console.log(identifier);
  useEffect(
    function () {
      console.log("user Logged IN");
      fetch(`${baseURL}/cart${identifier}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setItemsState(data);
          console.log(data);
        })

        .catch((error) => {
          console.log(error);
        });
    },
    [AuthCTX.isLoggedIn]
  );

  const addItem = async (item) => {
    try {
      console.log(item);
      const response = await fetch(`${baseURL}/cart${identifier}`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Oops, Something Went Wrong!");
      }
      const data = await response.json();
      console.log(data);

      setItemsState((prev) => {
        const found = prev.find((obj) => {
          return obj.title === item.title;
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
    } catch (error) {
      console.log(error);
    }
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
