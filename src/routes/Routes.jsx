import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop/Shop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoutes from "./privateRoutes";
import DashBoard from "../layout/DashBoard";
import Mycart from "../pages/Dashboard/Mycart/Mycart";
import AllUsers from "../pages/Dashboard/allusers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/additem/AddItem";
import ManageItems from "../pages/Dashboard/manageItems/ManageItems";
import Payment from "../pages/Dashboard/payment/Payment";
import Userhome from "../pages/Dashboard/Userhome/Userhome";
import Adminhome from "../pages/Dashboard/Adminhome/Adminhome";
import Notfound from "../pages/404/Notfound";
import PaymentHistory from "../pages/Dashboard/payment-history/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/shop/:category",
        element: (
          <PrivateRoutes>
            <Shop></Shop>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "mycart",
        element: <Mycart></Mycart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "userhome",
        element: <Userhome></Userhome>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <Adminhome></Adminhome>
          </AdminRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path:'*',
    element:<Notfound></Notfound>
  }
]);

export default router;
