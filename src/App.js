import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Product from "./Components/Pages/Product";
import StoreContextProvider from "./Components/Pages/StoreContextProvider";
import CartContextProvider from "./Components/Cart/CartContextProvider";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Store />,
      exact: true,
    },
    {
      path: "/store/:productID",
      element: <Product />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return (
    <CartContextProvider>
      <StoreContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </StoreContextProvider>
    </CartContextProvider>
  );
}

export default App;
