import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const MainNavbar = (props) => {
  const navigate = useNavigate();
  const loginHandler = () => {
    console.log("login");
    navigate("/login");
  };
  const logoutHandler=()=>{
    console.log('logout');
    AuthCTX.logout();
  }
  const AuthCTX = useContext(AuthContext);
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className={`bg-body-tertiary ${style.dark}`}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={style.link} to="/home">
              Home
            </NavLink>
            <NavLink className={style.link} to="/store">
              Store
            </NavLink>
            <NavLink className={style.link} to="/about">
              About
            </NavLink>
            <NavLink className={style.link} to="/contact">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {props.showLogin && (
          <button
            onClick={!AuthCTX.isLoggedIn? loginHandler: logoutHandler}
            style={{
              borderRadius: "5px",
              border: "none",
              padding: "0.2rem 1rem",
            }}
          >
            {!AuthCTX.isLoggedIn ? "Login" : "Logout"}
          </button>
        )}
        {props.showCartButton && (
          <CartButton toggleShow={props.toggleShow}></CartButton>
        )}
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
