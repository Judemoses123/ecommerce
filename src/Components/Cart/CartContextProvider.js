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
  if (!!identifier) {
    localStorage.setItem("email", identifier);
  }
  const baseURL = `https://crudcrud.com/api/0ce1e9b75dbd453cbc2337c3f4460225`;
  useEffect(
    function () {
      fetch(`${baseURL}/cart${identifier}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setItemsState(data);
        })

        .catch((error) => {
          console.log(error);
        });
    },
    [AuthCTX.isLoggedIn]
  );

  const addItem = async (item) => {
    try {
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
      const _id = data._id;
      setItemsState((prev) => {
        const found = prev.find((obj) => {
          return obj.title === item.title;
        });
        if (found) {
          return prev.map((obj) => {
            const newObj =
              obj.title == item.title
                ? { ...obj, quantity: obj.quantity + 1, _id: _id }
                : obj;
            return newObj;
          });
        }
        const newItems = [{ ...item, _id: _id }, ...prev];
        return newItems;
      });
    } catch (error) {
      console.log(error);
    }
  };
  const email = localStorage.getItem("email");
  const removeItem = async (_id) => {
    try {
      const response = await fetch(`${baseURL}/cart${email}/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("remove failed");
      }
      setItemsState((prev) => {
        const found = prev.find((cartitem) => {
          return cartitem._id == _id;
        });
        
        if (found.quantity > 1) {
          const newArray = prev.map((cartitems) => {
            return cartitems._id == _id
              ? { ...cartitems, quantity: cartitems.quantity - 1 }
              : cartitems;
          });
          return newArray;
        } else {
          const newarray = prev.filter((items) => {
            return items._id != _id;
          });
          return newarray;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
