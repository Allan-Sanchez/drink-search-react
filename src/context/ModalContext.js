import React,{useState,createContext} from 'react'
import Axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [idRecipe, setIdRecipe] = useState(null);
    return ( 
        <ModalContext.Provider
        value={{
            setIdRecipe
        }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;
