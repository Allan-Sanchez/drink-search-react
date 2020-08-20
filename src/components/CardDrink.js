import React,{useContext} from "react";
import {RecipeContext} from "../context/RecipeContext";
import DetailCard from "./DetailCard";

const CardDrink = () => {

  const {recipe} = useContext(RecipeContext);
  
  // console.log(recipe);

  if(recipe.length === 0) return null;
  
  return (
    <div className="grid grid-cols-3 gap-4 pt-5">
      {recipe.map(item =>(
        <DetailCard key={item.idDrink} recipe={item}></DetailCard>
      ))}
    </div>
    
  );
};

export default CardDrink;
