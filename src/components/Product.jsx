import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './Store/CartSlice'

const Product = () => {
            const dispatch = useDispatch()

            const [product, setProduct] = useState([])
            useEffect(() => {
                        fetch("https://fakestoreapi.com/products")
                                    .then(data => data.json())
                                    .then(result => setProduct(result))
            }, [])

            const addtocart = (product) => {
                        dispatch(add(product))

            }


            return (

                        <div className='flex flex-wrap justify-center'>

                                    {product.map((data) => (
                                                <div key={data.id} className='w-[250px] h-[300px] border m-4 rounded-lg
                         shadow-lg border-black'>
                                                            <div className='w-full h-[50%]'>
                                                                        <img className='w-full h-full '
                                                                                    src={data.image} alt="" />
                                                            </div>
                                                            <div className='flex flex-col justify-end '>
                                                                        <h2 className='font-semibold'>{data.title}</h2>
                                                                        <p className='font-bold font-sans'>₹{data.price}</p>
                                                                        <button onClick={() => addtocart(data)} className='bg-black active:scale-[0.9] text-white
                                                                         px-6 py-2 rounded-lg'>Add to Cart</button>
                                                            </div>
                                                </div>
                                    ))}
                        </div>
            )
}

export default Product