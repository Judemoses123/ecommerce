import { Image } from "react-bootstrap";
import style from './CartItems.module.css'
const CartItems = (props) => {
  return (
    <div className={style.main} >
      <div className={style.left}>
        <div className={style.img} style={{backgroundImage:`url(${props.imageUrl})`}}></div>
        <span className={style.title}>{props.title}</span>
      </div>
      <span className={style.price}>{props.price}</span>
      <div className={style.quantity}>
        <span className={style.count}>1</span>
        <button className={style.btn}>Remove</button>
      </div>
    </div>
  );
};
export default CartItems;