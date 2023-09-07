
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
function App() {
  
  const router = createBrowserRouter([
    {
      path:"",
      element:<Home/>
    },
    {
      path: "home",
      element: <Home/>,
    },
    {
      path:"store",
      element: <Store/>
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path:"/contact",
      element: <Contact/>
    }
  ]);
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
