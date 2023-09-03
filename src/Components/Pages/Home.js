import style from "./Home.module.css";
import MainNavbar from "../Navbar/Navbar";
import HeroImage from "../HeroImage/HeroImage";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import CartOffCanvas from "../Cart/CartOffCanvas";
import CartContextProvider from "../Cart/CartContextProvider";
import { useState } from "react";
const Home = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  return (
    <CartContextProvider>
      <div className={style.App}>
        {show && <CartOffCanvas toggleShow={toggleShow} />}
        <MainNavbar toggleShow={toggleShow} showCartButton={true}/>
        <HeroImage />
        <Main toggleShow={toggleShow} show={show} />
        <Footer />
      </div>
    </CartContextProvider>
  );
};
export default Home;
