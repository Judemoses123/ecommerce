import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import style from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { NavLink } from "react-router-dom";
const MainNavbar = (props) => {
  const navigate = useNavigate();
  const loginHandler = () => {
    console.log("login");
    navigate("/login");
  };
  const logoutHandler = () => {
    console.log("logout");
    AuthCTX.logout();
    AuthCTX.setEmail('');
  };
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
            <NavLink className={style.link} to="/home" activeClassName={style.actives}>
              Home
            </NavLink>
            <NavLink className={style.link} to="/store" activeClassName={style.actives}>
              Store
            </NavLink>
            <NavLink className={style.link} to="/about" activeClassName={style.actives}>
              About
            </NavLink>
            <NavLink className={style.link} to="/contact" activeClassName={style.actives}>
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        {props.showLogin && (
          <button
            onClick={!AuthCTX.isLoggedIn ? loginHandler : logoutHandler}
            style={{
              borderRadius: "5px",
              border: "none",
              padding: "0.4rem 1rem",
              backgroundColor: "#0D6EFD",
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
