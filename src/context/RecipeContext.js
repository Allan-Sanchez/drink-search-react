import React,{createContext, useState, useEffect} from 'react'
import Axios from 'axios';


export const RecipeContext = createContext();

const RecipeProvider = (props) => {
    
    const [recipe, setRecipe] = useState([]);
    const [search, setSearch] = useState({
        nameDrink :'',
        category:''
    });
    const [consult, setConsult] = useState(false);

    const {nameDrink,category} = search;

    useEffect(() => {
        if (consult) {
            
            const getRecipe = async() =>{
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nameDrink}&c=${category}`;
                const respons = await Axios.get(URL);
                setRecipe(respons.data.drinks);
            }
            getRecipe();
        }
    }, [search,consult,nameDrink,category]);
    return (  
        <RecipeContext.Provider
        value={{setSearch,setConsult}}
        >
            {props.children}
        </RecipeContext.Provider>
    );
}
 
export default RecipeProvider;
