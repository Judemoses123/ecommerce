import { Image } from "react-bootstrap";
import style from "./CartItems.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Auth/AuthContext";
import CartContext from "./CartContext";
const CartItems = (props) => {
  const AuthCTX= useContext(AuthContext);
  const id = String(AuthCTX.email);
  // console.log(id);
  const idWithoutAt = id.replace("@", "");
  const idWithoutDot = idWithoutAt.replace(".", "");
  const identifier = idWithoutDot;
  const email= localStorage.getItem('email');
  // console.log(identifier);
  const CartCTX= useContext(CartContext);
  const removeHandler = async () => {
    const _id = props._id;
    // console.log('this is id>', _id);
    CartCTX.removeItem(_id);
  };
  const price = Number(props.price).toFixed(2);
  return (
    <div className={style.main}>
      <div className={style.left}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        ></div>
        <span className={style.title}>{props.title}</span>
      </div>
      <span className={style.price}>${price}</span>
      <div className={style.quantity}>
        <span className={style.count}>{props.quantity}</span>
        <button onClick={removeHandler} className={style.btn}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItems;
