import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { remove } from './Store/CartSlice'

const Cart = () => {
            const dispatch = useDispatch()
            const cartProducts = useSelector(state => state.cart)

            const removecart = (id) => {
                        dispatch(remove(id))
            }


            return (
                        <div className='flex flex-wrap justify-center'>
                                    {cartProducts.map((data) => (
                                                <div key={data.id} className='w-[250px] h-[300px] border m-4 rounded-lg
                         shadow-lg border-black'>
                                                            <div className='w-full h-[50%]'>
                                                                        <img className='w-full h-full '
                                                                                    src={data.image} alt="" />
                                                            </div>
                                                            <div className='flex flex-col justify-end '>
                                                                        <h2 className='font-semibold'>{data.title}</h2>
                                                                        <p className='font-bold font-sans'>₹{data.price}</p>
                                                                        <button onClick={() => removecart(data.id)} className='bg-black active:scale-[0.9] text-white
                                                                         px-6 py-2 rounded-lg'>Remove</button>
                                                            </div>
                                                </div>
                                    ))}

                        </div>
            )
}

export default Cart