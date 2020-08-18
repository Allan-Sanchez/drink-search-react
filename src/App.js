import React from "react";
import FormDrink from "./components/FormDrink";
import CardDrink from "./components/CardDrink";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App bg-gray-400 h-screen">
      <h1 className="h-40 text-center text-white bg-red-500 text-6xl pt-5">
        Drink Search
      </h1>
        <FormDrink/>
        <Modal/>
        <div className="grid grid-cols-3 gap-4 pt-10">
        <CardDrink/>
        </div>
    </div>
  );
}

export default App;
