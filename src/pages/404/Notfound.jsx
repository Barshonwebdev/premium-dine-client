import React from 'react';
import gif from '../../assets/404.gif'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
      <div>
        <p className="text-2xl text-center mt-5 text-red-600">
          SORRY, NOT FOUND!
        </p>
        <div className="flex justify-center ">
          <img src={gif} alt="" />
        </div>
        <div className="flex justify-center ">
          <Link className="-mt-9 " to="/">
            <button className="btn btn-neutral ">
              Back to home <FaHome></FaHome>
            </button>
          </Link>
        </div>
        <hr className="mt-5" />
      </div>
    );
};

export default Notfound;