import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartContext from '../Cart/CartContext';

function MainCard(props) {
  const ctx= useContext(CartContext);
  const clickHandler=()=>{
    const item={
      title:props.title,
      price:props.price,
      imageUrl:props.imageUrl,
      quantity:1,
    }
    ctx.addItems(item);
  }
  return (
    <Card style={{margin:'1rem',maxWidth:'20vw'}}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <div style={{display:'flex', justifyContent:'space-between', margin:'2rem 1rem', alignItems:'center'}}>
        <span>${props.price}</span>
        <Button onClick={clickHandler} variant="primary">ADD TO CART</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MainCard;