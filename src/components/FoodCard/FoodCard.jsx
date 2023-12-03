import React from 'react';

const FoodCard = ({item}) => {
        const { price, name, recipe, image } = item;

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
            <button className="btn btn-outline hover:bg-black hover:text-amber-500 border-black text-xl italic border-0 border-b-4 my-5">
              Order 
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;