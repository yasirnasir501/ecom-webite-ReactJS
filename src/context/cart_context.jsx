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

    // increment & Decrement product

    const setDecrease = (id) => {
        dispatch({type: "SET_DECREMENT", payload: id})
    }
    
    const setIncrease = (id) => {
        dispatch({type: "SET_INCREMENT", payload: id})
    }

    // remove item 
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id});
    }

    // clear cart 
    const clearCart = () =>  {
        dispatch({ type: 'CLEAR_CART'});
    }

    // Local Storage 
    // get & set 
    useEffect(() => {
        // dispatch({type: 'CART_TOTAL_ITEM'});
        // dispatch({type: 'CART_TOTAL_PRICE'});
        dispatch({type: 'CART_ITEM_TOTAL_PRICE'});
        localStorage.setItem('YasirCart', JSON.stringify(state.cart))
    }, [state.cart]);

    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease,}}>{children}</CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext, useCartContext);
}

export {CartProvider, useCartContext};