
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/Pages/About";
import Store from "./Components/Pages/Store";
import Home from "./Components/Pages/Home";
function App() {
  
  const router = createBrowserRouter([
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
  ]);
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
