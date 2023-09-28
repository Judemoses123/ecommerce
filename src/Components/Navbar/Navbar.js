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
    navigate("/login");
  };
  const logoutHandler = () => {
    AuthCTX.logout();
    AuthCTX.setEmail("");
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
        <Navbar.Collapse id="basic-navbar-nav" style={{height:'2.5rem'}}>
          <Nav className="me-auto">
            <NavLink className={({ isActive, isPending }) => {
                return isActive ? style.active: style.link;
              }} to="/home">
              Home
            </NavLink>
            <NavLink className={({ isActive, isPending }) => {
                return isActive ? style.active: style.link;
              }} to="/store">
              Store
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                return isActive ? style.active: style.link;
              }}
              to="/about"
              activeClassName={style.actives}
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) => {
                return isActive ? style.active: style.link;
              }}
              to="/contact"
              activeClassName={style.actives}
            >
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
