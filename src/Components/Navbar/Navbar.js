import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar} from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";
const MainNavbar = (props) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className={`bg-body-tertiary ${style.dark}`}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {props.showCartButton && <CartButton toggleShow={props.toggleShow}></CartButton>}
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
