import React,{useContext} from "react";
import {ModalContext} from "../context/ModalContext";

export default function Modal({showModal,closeModal}) {
  const {recipe} = useContext(ModalContext);
  
  const showIngredient = recipe =>{
    let ingredient = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredient.push(
        <li>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
        )
      }  
    }
    return ingredient;
  };
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() =>  closeModal()}
          >
            <div className="relative w-auto my-32 mx-auto max-w-xl " style={{top:"25%"}}>
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold text-red-500 text-center">
                    {recipe.strDrink}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => closeModal()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="h-64 w-full flex justify-center">
                    <a target="_blank" className="block" href={recipe.strDrinkThumb} rel="noopener noreferrer">
                      <img className="h-full mx-auto" src={recipe.strDrinkThumb} alt=""/>
                    </a>
                  </div>
                  <div className="pt-5">
                  <h3 className="text-2xl text-red-500 font-semibold">Instructions</h3>
                  <p className="my-4 text-gray-600 text-lg leading-relaxed">
                    {recipe.strInstructions}
                  </p>
                  <h3 className="text-2xl text-red-500 font-semibold">Ingredient</h3>
                    <div className="my-4 text-gray-600 text-lg leading-relaxed">
                      <ul>
                        {showIngredient(recipe)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}