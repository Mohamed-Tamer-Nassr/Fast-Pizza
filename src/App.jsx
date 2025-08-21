import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/cart/Cart";
// The first of second step of fetching data with react router
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        // the second of the seconde step of fetching data with react router
        loader: menuLoader,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
