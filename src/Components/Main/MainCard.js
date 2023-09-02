import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MainCard(props) {
  return (
    <Card style={{margin:'1rem',maxWidth:'20vw'}}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>
        <div style={{display:'flex', justifyContent:'space-between', margin:'2rem 1rem', alignItems:'center'}}>
        <span>${props.price}</span>
        <Button variant="primary">ADD TO CART</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MainCard;