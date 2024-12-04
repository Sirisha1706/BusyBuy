

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Items from "./components/Items/Items";
import Navbar from "./components/NavBar/Navbar";
import CustomItemContext from "./itemContext";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";

function App() {
  const router = createBrowserRouter([
    {
    path: '/',
    element: <Navbar/>,
    children:[
      {path: '/', element: <Items/>},
      {path: '/login', element: <Login/>},
      {path: '/register', element: <Register/>},
      {path: '/cart', element: <Cart/>},
      {path: '/orders', element: <Orders/>}
    ]
    },
  ])

  return (
    // providing multiple contexts
    <CustomItemContext>
       <RouterProvider router={router} />
    </CustomItemContext>
  );
}
export default App;
