import React from 'react'
import FormatPrice from '../helper/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import {BsFillTrash3Fill} from 'react-icons/bs'
import { useCartContext } from '../context/cart_context'

const CartItem = ({id, name, image, color, price, amount}) => {
    const {removeItem, setDecrease, setIncrease} = useCartContext();

    // const setDecrease = () => {
    //     // amount > 1 ? setAmount(amount - 1) : setAmount(1);
    // }

    // const setIncrease = () => {
    //     // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    // }
  return (
    <div className='cart_heading grid grid-five-column'>
        <div className='cart-image--name'>
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>

            <div>
                <p>color:</p>
                <div className='color-style' style={{backgroundColor: color, color:color}}></div>
            </div>

        </div>

        {/* price */}
        <div className='cart-hide'>
            <p><FormatPrice price={price}/></p>
        </div>

        {/* Qunatity  */}
        <CartAmountToggle
         amount={amount} 
         setDecrease={() => setDecrease(id)} 
         setIncrease={() => setIncrease(id)} />

        {/* subtotal  */}
        <div className='cart-hide'>
            <p><FormatPrice price={price + amount}/></p>
        </div>

        {/* remove  */}
        <div>
        <BsFillTrash3Fill className='remove_icon' onClick={() => removeItem(id)}/>
        </div>

    </div>
  )
}

export default CartItem;