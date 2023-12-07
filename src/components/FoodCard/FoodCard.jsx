import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
        const { price, name, recipe, image } = item;
        const {user} = useContext(AuthContext);
        const navigate=useNavigate();
        const location=useLocation();
        const handleaddToCart=()=>{
          if(user){
            fetch("http://localhost:5000/cart")
            .then(res=>res.json())
            .then(data=>{
              if(data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            })
          }
          else{
            Swal.fire({
              title: "Please Log in first",
            
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state:{from:location}});
              }
            });
          }
        }
    return (
      <div className="card card-compact w-fit bg-base-100 shadow-xl">
        <p className="bg-gray-900 text-orange-300 absolute right-0 mt-5 mr-5 p-1 rounded-lg">
          $ {price}
        </p>
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={handleaddToCart} className="btn btn-outline hover:bg-black hover:text-amber-500 border-black text-xl italic border-0 border-b-4 my-5">
              Order 
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;