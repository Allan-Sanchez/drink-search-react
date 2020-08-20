import React from "react";
import CategoriesProvider from "./context/CategoriesContext";
import RecipeProvider from "./context/RecipeContext";
import ModalProvider from "./context/ModalContext";

import CardDrink from "./components/CardDrink";
import FormDrink from "./components/FormDrink";
// import Modal from "./components/Modal";
function App() {
  return (
    <CategoriesProvider>
      <RecipeProvider>
        <ModalProvider>
          <div className="App bg-gray-400 h-full">
            <h1 className="h-40 text-center text-white bg-red-500 text-6xl pt-5">
              Drink Search
            </h1>
            <FormDrink />
            {/* <Modal/> */}
            <CardDrink />
          </div>
        </ModalProvider>
      </RecipeProvider>
    </CategoriesProvider>
  );
}

export default App;
