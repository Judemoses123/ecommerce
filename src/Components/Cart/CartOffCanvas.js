import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./CartOffCanvas.module.css"; // Import your style file here
import CartContext from "./CartContext";
import CartItems from "./CartItems";
import { useContext } from "react";
import { Button } from "react-bootstrap";
const CartOverlay = (props) => {
  const ctx = useContext(CartContext);
  const clickHandler = () => {
    props.toggleShow();
  };
  // console.log(ctx.cartItems);
  
  return (
    <>
      {ctx.cartItems.length > 0 && (
        <div className={style.main}>
          <div className={style.top}>
            <button onClick={clickHandler} className={style.btn}>
              X
            </button>
          </div>
          <span className={style.heading}>CART</span>
          <div className={style.row}>
            <span className={style.item}>ITEM</span>
            <span className={style.price}>PRICE</span>
            <span className={style.quantity}>QUANTITY</span>
          </div>
          {ctx.cartItems.map((item) => {
            // console.log('this is item>',item);
            return (
              <CartItems
                key={item.title}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
                _id={item._id}
              />
            );
          })}
        </div>
      )}
      {
        ctx.cartItems.length<=0 && 
        <div className={style.main}>
          <div className={style.top}>
            <button onClick={clickHandler} className={style.btn}>
              X
            </button>
          </div>
          <span className={style.heading}>Cart Empty, Add Items!</span>
          <div className={style.bg}/>
          <Button onClick={clickHandler}>ADD ITEMS</Button>
        </div>
      }
    </>
  );
};

const CartOffCanvas = (props) => {
  return ReactDOM.createPortal(
    <CartOverlay toggleShow={props.toggleShow} />,
    document.getElementById("overlay")
  );
};

export default CartOffCanvas;
