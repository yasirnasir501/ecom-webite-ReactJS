import {createContext, useContext, useEffect, useReducer} from 'react';
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

    const getLocalCartData = () => {
        let localCartData = localStorage.getItem('YasirCart');
        if (localCartData === []) {
            return [];
        } else {
            return JSON.parse(localCartData);
        }
    }

    const initialState = {
        // cart: [],
        cart: getLocalCartData(),
        total_item: '',
        total_amount: '',
        shipping_fee: 50000,
    };

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, amount, product) => {
        dispatch({type: 'ADD_TO_CART', payload: { id, color, amount, product }})
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id});
    }

    // Local Storage 
    // get & set 
    useEffect(() => {
        localStorage.setItem('YasirCart', JSON.stringify(state.cart))
    }, [state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem}}>{children}</CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext, useCartContext);
}

export {CartProvider, useCartContext};