import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Adminhome = () => {
    const {user}=useAuth();
    const {data:stats={}}=useQuery({
        queryKey:['admin-dashboard'],
        queryFn:async()=>{
            const res= await fetch('http://localhost:5000/admin-dashboard');
            
            return res.json();
        }
    })

    return (
      <div>
        <p className="text-3xl text-blue-600 text-center">Admin Dashboard</p>
        <h2 className="text-center text-green-600 font-semibold text-xl">
          Hi! {user.displayName}
        </h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-x-44 md:gap-y-11 md:mx-5 gap-y-3 ">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body bg-blue-700 text-white">
                <h2 className="card-title">Revenue</h2>
                <p className="text-xl font-bold text-">$ {stats.revenue}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body bg-green-700 text-white">
                <h2 className="card-title">Customers</h2>
                <p className="text-xl font-bold text-"> {stats.users}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body bg-red-700 text-white">
                <h2 className="card-title">Products</h2>
                <p className="text-xl font-bold text-"> {stats.products}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body bg-yellow-700 text-white">
                <h2 className="card-title">Orders</h2>
                <p className="text-xl font-bold text-"> {stats.orders}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Adminhome;