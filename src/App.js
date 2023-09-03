import "./App.css";
import MainNavbar from "./Components/Navbar/Navbar";
import HeroImage from "./Components/HeroImage/HeroImage";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import CartOffCanvas from "./Components/Cart/CartOffCanvas";
import CartContextProvider from "./Components/Cart/CartContextProvider";
import { useContext , useEffect, useState} from "react";
import CartContext from "./Components/Cart/CartContext";
function App() {
  const [show, setShow]= useState(false);
  const toggleShow=()=>{
    setShow((prev)=>{
      return !prev;
    })
  }
  return (
    <CartContextProvider>
      <div className="App">
        {show && <CartOffCanvas toggleShow={toggleShow}/>}
        <MainNavbar toggleShow={toggleShow} />
        <HeroImage />
        <Main />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
