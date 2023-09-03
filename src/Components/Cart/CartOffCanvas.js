import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./CartOffCanvas.module.css"; // Import your style file here
import CartContext from "./CartContext";
import CartItems from "./CartItems";
import { useContext } from "react";
const CartOverlay = (props) => {
  const ctx = useContext(CartContext);
  const clickHandler=()=>{
    props.toggleShow();
  }
  return (
    <div className={style.main}>
      <button onClick={clickHandler} className={style.btn}>X</button>
      <span className={style.heading}>CART</span>
      <div className={style.row}>
        <span className={style.item}>ITEM</span>
        <span className={style.price}>PRICE</span>
        <span className={style.quantity}>QUANTITY</span>
      </div>
      {
        ctx.cartItems.map((item)=>{
          return (<CartItems key={item.title} title={item.title} price={item.price} imageUrl={item.imageUrl}/>)
        })
      }
    </div>
  );
};

const CartOffCanvas = (props) => {
  return ReactDOM.createPortal(
    <CartOverlay toggleShow={props.toggleShow} />,
    document.getElementById("overlay")
  );
};

export default CartOffCanvas;
