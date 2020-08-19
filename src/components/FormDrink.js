import React, { useState, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import {RecipeContext} from "../context/RecipeContext";

const FormDrink = () => {
  
  const [data, setData] = useState({
      nameDrink :'',
      category:''
    });
    
    const { categories } = useContext(CategoriesContext);
    const {setSearch,setConsult} = useContext(RecipeContext);

    const setValue = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  };
  // const {nameDrink,selectDrink} = data;

  const handleForm = (e) =>{
    e.preventDefault();

    setSearch(data);
    setConsult(true);
  };

  return (
    <form onSubmit={handleForm} className="grid grid-cols-5 gap-4 pt-5">
      <div className="col-start-2 mb-3 pt-0">
        <input
          type="text"
          name="nameDrink"
          autoFocus onChange={setValue}
          placeholder="Write the name of the drink"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full placeholder-gray-700"
        />
      </div>
      <div className="inline-block relative w-64">
        <select
          name="category" onChange={setValue}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option>--Select Drink--</option>
          {categories.length > 0
            ? categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))
            : null}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="">
        <button
          type="submit"
          className="bg-red-500 w-2/3  hover:bg-blue-700 text-white font-bold py-3  px-4 rounded"
        >
          Find a recipe
        </button>
      </div>
    </form>
  );
};

export default FormDrink;
