import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUsers } from "react-icons/fa";
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {data: users=[], refetch}=useQuery({queryKey:['users'] ,queryFn: async()=>{
        const res= await fetch('http://localhost:5000/users')
        return res.json();
    }})

    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
          method:"PATCH",
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount>0){
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} has been made admin `,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
    }
    const handleDelete=(user)=>{

    }
    return (
      <div>
        <Helmet>
          <title>Premium Dine | All Users</title>
        </Helmet>
        <div>
          <h3 className="text-3xl">Total Users: {users.length}</h3>
          <div className="overflow-x-auto ">
            <table className="table table-zebra w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button onClick={()=>handleMakeAdmin(user)} className='btn bg-orange-500'>
                          <FaUsers className="text-lg"></FaUsers>
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-error btn-md text-white hover:bg-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllUsers ;