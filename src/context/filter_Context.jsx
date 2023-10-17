import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './productContext'
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
}

export const FilterContextProvider = ({ children }) => {

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // set Grid View 
    const setGridView = () => {
        return dispatch({ type: 'SET_GRIDVIEW'});
    };

    

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products});
    }, [products])

    return(
     <FilterContext.Provider value={{...state, setGridView}}>{children}</FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext)
}