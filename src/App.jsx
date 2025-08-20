import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/cart/Cart";
// The first of second step of fetching data with react router
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        // the second of the seconde step of fetching data with react router
        loader: menuLoader,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/:orderId", element: <Order /> },
      { path: "/order/new", element: <CreateOrder /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
