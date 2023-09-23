import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Product from "./Components/Pages/Product";
import StoreContextProvider from "./Components/Pages/StoreContextProvider";
import CartContextProvider from "./Components/Cart/CartContextProvider";
import Login from "./Components/Pages/Login";
import AuthContextProvider, {
  AuthContext,
} from "./Components/Auth/AuthContext";
import { useContext, useEffect, useState } from "react";

function App() {
  console.log('reloaded')
  const AuthCTX = useContext(AuthContext);
  
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <StoreContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/home" exact />}></Route>
              <Route path="/home" element={<Home />} />
              <Route path="/store" element={<Store /> } />
              <Route path="/store/:productID" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </BrowserRouter>
        </StoreContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
