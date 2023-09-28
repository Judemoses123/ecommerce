import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy, useContext, useEffect, useState } from "react";
import Home from "./Components/Pages/Home";
import StoreContextProvider from "./Components/Pages/StoreContextProvider";
import CartContextProvider from "./Components/Cart/CartContextProvider";
import Spinner from 'react-bootstrap/Spinner';
import Loader from "./Components/Pages/Loader";

import AuthContextProvider, {
  AuthContext,
} from "./Components/Auth/AuthContext";
import PrivateRoutes from "./Components/PrivateRoutes";

function App() {
  const About = lazy(() => import("./Components/Pages/About"));
  const Contact = lazy(() => import("./Components/Pages/Contact"));
  const Product = lazy(() => import("./Components/Pages/Product"));
  const Login = lazy(() => import("./Components/Pages/Login"));
  const Store = lazy(() => import("./Components/Pages/Store"));
  const AuthCTX = useContext(AuthContext);
  const [loginState, setLoginState] = useState(AuthCTX.isLoggedIn);
  useEffect(() => {
    setLoginState(AuthCTX.isLoggedIn);
  }, [AuthCTX.isLoggedIn]);
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <StoreContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/home" exact />}></Route>
              <Route
                path="/home"
                element={
                  <Suspense fallback={<Loader/>}>
                    <Home/>
                  </Suspense>
                }
              />
              <Route element={<PrivateRoutes />}>
                <Route
                  path="/store"
                  element={
                    <Suspense fallback={<Loader/>}>
                      <Store />
                    </Suspense>
                  }
                  exact
                />
                <Route
                  path="/store/:type/:productID"
                  element={
                    <Suspense fallback={<Loader/>}>
                      <Product />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loader/>}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loader/>}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="/login"
                element={
                  <Suspense fallback={<Loader/>}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loader/>}>
                    <Navigate to="/home" />
                  </Suspense>
                }
              />
            </Routes>
          </BrowserRouter>
        </StoreContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
