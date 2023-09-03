import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import CartContext from "./CartContext";

function CartButton(props) {
  const ctx = useContext(CartContext);
  const clickHandler = () => {
    props.toggleShow();
  };
  return (
    <Button variant="primary" onClick={clickHandler}>
      Cart <Badge bg="warning">{ctx.cartItems.length}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CartButton;
