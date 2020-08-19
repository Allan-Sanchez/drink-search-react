import React from "react";

const CardDrink = () => {

  return (
    <div className="flex flex-col justify-center items-center max-w-sm mx-auto">
      <div
        className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
        >
          <img src="https://images.unsplash.com/photo-1507281549113-040fcfef650e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""/>
      </div>

      <div className="w-56 md:w-64 bg-blue-100 -mt-10 shadow-lg rounded-lg overflow-hidden">
        <h3 className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
          Nike Revolt
        </h3>

        <div className="flex items-center justify-center py-2 px-3 bg-blue-100">
          <button className=" w-11/12 bg-red-500 text-md text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
            view recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDrink;
