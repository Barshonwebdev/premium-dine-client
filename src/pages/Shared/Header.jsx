import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const {user,logout}=useContext(AuthContext);
  const handleLogout=()=>{
    logout()
    .then(()=>{

    })
  }
    const navOptions = (
      <div className="md:flex md:space-x-5 ">
        <li>
          <Link to="/">
            <button className="btn btn-ghost">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <button className="btn btn-ghost">Our Menu</button>
          </Link>
        </li>
        <li>
          <Link to="/shop/salad">
            <button className="btn btn-ghost">Our Shop</button>
          </Link>
        </li>
        <li>
          {user ? (
            <>
              <Link>
                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-ghost">Login</button>
              </Link>
            </>
          )}
        </li>
      </div>
    );
    return (
      <div>
        <div className="navbar fixed z-10 bg-black bg-opacity-50 max-w-screen-lg text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {navOptions}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Premium Dine</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" px-1">
             {navOptions}
            </ul>
          </div>
          
        </div>
      </div>
    );
};

export default Header;