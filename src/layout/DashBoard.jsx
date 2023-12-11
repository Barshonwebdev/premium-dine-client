import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiBowlFoodFill } from "react-icons/pi";
import useCart from "../hooks/useCart";
import { FaUtensils } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
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
          <ul className="menu p-4 w-52 md:w-80 min-h-full  text-white">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome>Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem">
                    <FaUtensils></FaUtensils>Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage">
                    <RiWallet3Line></RiWallet3Line>Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/bookings">
                    <IoMdBook></IoMdBook>Manage Bookings
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
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome>User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservations">
                    <SlCalender></SlCalender>Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment">
                    <RiWallet3Line></RiWallet3Line>Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart{""}
                    <span className="badge badge-neutral">
                      +{cart?.length || 0}
                    </span>
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
                <GiHamburgerMenu></GiHamburgerMenu>Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/salad">
                <PiBowlFoodFill></PiBowlFoodFill>Order Food
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default DashBoard;