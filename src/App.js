import React from "react";
import CategoriesProvider from "./context/CategoriesContext";
import RecipeProvider from "./context/RecipeContext";
import CardDrink from "./components/CardDrink";
import FormDrink from "./components/FormDrink";
// import Modal from "./components/Modal";
function App() {
  return (
    <CategoriesProvider>
      <RecipeProvider>
        <div className="App bg-gray-400 h-screen">
          <h1 className="h-40 text-center text-white bg-red-500 text-6xl pt-5">
            Drink Search
          </h1>
          <FormDrink />
          {/* <Modal/> */}
          <div className="grid grid-cols-3 gap-4 pt-5">
            <CardDrink />
          </div>
        </div>
      </RecipeProvider>
    </CategoriesProvider>
  );
}

export default App;
