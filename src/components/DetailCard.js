import React,{useContext} from "react";

import {ModalContext} from "../context/ModalContext";

const DetailCard = ({recipe}) => {
//   console.log(recipe);
    const {setIdRecipe} = useContext(ModalContext);
    return (
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto md:pb-10">
      <div className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
        <img className="h-full"
          src={recipe.strDrinkThumb}
          alt=""
        />
      </div>

      <div className="w-56 md:w-64 bg-blue-100 -mt-10 shadow-lg rounded-lg overflow-hidden">
        <h3 className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          {recipe.strDrink}
        </h3>

        <div className="flex items-center justify-center py-2 px-3 bg-blue-100">
          <button onClick={ () =>{
              setIdRecipe(recipe.idDrink)
          }} className=" w-11/12 bg-red-500 text-md text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
            view recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
