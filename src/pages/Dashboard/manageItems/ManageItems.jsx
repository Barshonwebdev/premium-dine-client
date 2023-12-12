import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [menu,,refetch]=useMenu();
    const handleItemDelete=(item)=>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/menu/${item._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                     Swal.fire({
                       title: "Deleted!",
                       text: "Your menu item has been deleted.",
                       icon: "success",
                     });
                }
            })

           
          }
        });
    }
    console.log(menu);
    return (
      <div className="px-8 w-full">
        <SectionTitle
          subHeading={"Hurry Up"}
          heading={"Manage Items"}
        ></SectionTitle>

        <div className="px-11 py-5">
          <Helmet>
            <title>Premium Dine | Manage Items </title>
          </Helmet>
          <div className="uppercase font-bold flex justify-evenly w-full ">
            <h3 className="text-3xl">Total items: {menu.length} </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Recipe</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
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
                    <td>{item.name}</td>
                    <td> {item.category}</td>
                    <td>${item.price}</td>
                    
                    <td>
                      <button
                        onClick={() => handleItemDelete(item)}
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

export default ManageItems;