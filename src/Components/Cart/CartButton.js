import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function CartButton() {
  return (
    <Button variant="primary">
      Cart  <Badge bg="secondary">0</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CartButton;