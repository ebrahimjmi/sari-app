import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items);
    console.log(cartItems)
  return (
    <div>Cart page</div>
  )
}

export default Cart