import { createContext } from "react";
const CartContext=createContext({
    cartItems: [],
    size:0,
    addItems:(item)=>{},
    removeItem:(id)=>{},
})
export default CartContext;