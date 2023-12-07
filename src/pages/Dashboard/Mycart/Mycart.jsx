import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const Mycart = () => {
    const [cart]=useCart();
    const total=cart.reduce((sum,item)=>item.price+sum,0);
    return (
      <div className="px-11">
        <Helmet>
          <title>Premium Dine | My Cart </title>
        </Helmet>
        <div className="uppercase font-bold flex justify-evenly ">
          <h3 className="text-3xl">Total items: {cart.length}</h3>
          <h3 className="text-3xl">Total Price: $ {total}</h3>
          <button className="btn btn-success">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item,index) => (
                <tr key={item._id}>
                  <td>{index+1}</td>
                  <td>
                    
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>$ {item.price}</td>
                  <td>
                    <button className="btn btn-error btn-md text-white hover:bg-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Mycart;