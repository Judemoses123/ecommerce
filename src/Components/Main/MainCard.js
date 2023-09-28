import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../Cart/CartContext";
import { Link } from "react-router-dom";
import style from "./MainCard.module.css";
function MainCard(props) {
  const ctx = useContext(CartContext);
  const clickHandler = () => {
    const item = {
      title: props.title,
      price: props.price,
      imageUrl: props.imageUrl,
      quantity: 1,
    };
    ctx.addItems(item);
  };
  const price= Number(props.price).toFixed(2);
  return (
    <Card className={style.card}>
      <Link to={`/store/${props.type}/${props.id}`}>
        <div
          className={style.imagebackdrop}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        >
          <div className={style.overlay}>
            <Card.Img
              variant="top"
              src={props.imageUrl}
              className={style.image}
            />
          </div>
        </div>
      </Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem 1rem",
            alignItems: "center",
          }}
        >
          <span style={{fontWeight:'bold'}}>${price}</span>
          <Button onClick={clickHandler} variant="primary">
            ADD TO CART
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MainCard;
