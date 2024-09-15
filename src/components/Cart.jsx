import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from "./ItemList"
import { clearCart } from '../utils/cartSlice';

function Cart() {
    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button onClick={handleClearCart} className='px-3 py-2 bg-red-600 text-white'>Clear Cart</button>
      <ItemList list={cartItems}/>

      </div>
    </div>
  )
}

export default Cart
