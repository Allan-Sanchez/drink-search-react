import React,{createContext, useState, useEffect} from 'react';
import Axios from 'axios';


export const CategoriesContext = createContext();

const CategoriesProvider= (props) =>{

    const [categories, setCategories] = useState({});

    useEffect(() => {
        const getCategories = async() =>{
            const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            let categories = await Axios(URL); 
            // console.log(categories.data.drinks);
            setCategories(categories.data.drinks);
        };
        getCategories();
    }, []);
    return(
        <CategoriesContext.Provider
        value={{
            categories
        }}
        >    
            {props.children}
        </CategoriesContext.Provider>
    )
};

export default CategoriesProvider;