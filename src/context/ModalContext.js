import React,{useState,createContext, useEffect} from 'react'
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipe, setRecipe] = useState({});
    useEffect(() => {
        const getRecipe = async() =>{
            if(!idRecipe) return;
            const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

            const response = await Axios(URL);

            setRecipe(response.data.drinks[0]);
        };
        getRecipe();

    }, [idRecipe])
      
    return ( 
        <ModalContext.Provider
        value={{
            recipe,
            setIdRecipe,
            setRecipe
        }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;
