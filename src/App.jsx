import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import MenuPage from "./pages/MenuPage";
import MenuList from "./components/Menu/MenuList";
import MenuDetails,{loader} from "./pages/MenuDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/coffee",
    element: <MenuPage />,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        element:<MenuList/>,
      },
      {
        path:':coffeeId',
        element:<MenuDetails/>,
        loader:loader,
      }
    ]
  },
  {
    path:'/cart',
    element:<CartPage/>
  },
  {
    path:'/checkout',
    element:<CheckoutPage/>
  }
  ,
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
