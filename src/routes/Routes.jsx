import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu/Menu";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/shop/:category',
            element:<Shop></Shop>
        }
    ]
  },
]);

export default router;
