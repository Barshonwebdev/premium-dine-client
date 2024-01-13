import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import useCart from "../hooks/useCart";
import { FaUtensils } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";




const DashBoard = () => {
  const [cart]=useCart();
 const [isAdmin]=useAdmin();
  //const isAdmin=true;
    return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn z-10 btn-primary btn-xs drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side md:bg-[#D1A054]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-52 md:w-80 min-h-full font-semibold ">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminhome">
                    <FaHome></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/additem">
                    <FaUtensils></FaUtensils>Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage">
                    <RiWallet3Line></RiWallet3Line>Manage Items
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUser></FaUser> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                
                
                <li>
                  <NavLink to="/dashboard/paymenthistory">
                    <RiWallet3Line></RiWallet3Line>Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart{""}
                   
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <GiHamburgerMenu></GiHamburgerMenu> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/salad">
                <PiBowlFoodFill></PiBowlFoodFill>Order 
              </NavLink>
            </li>
          </ul>
        </div>
        <ScrollRestoration></ScrollRestoration>
      </div>
    );
};

export default DashBoard;