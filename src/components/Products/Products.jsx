import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { privateAxios } from '../../api/privateAxios'
import Loader from '../../utilities/Loader'

export default function Products() {
    const { isLoading, error, data: products } = useQuery('products', () => privateAxios('/product').then(result => result.data))
    const navigate = useNavigate();
    if (isLoading) return <Loader />;

    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
                        Recently Viewed
                    </h2>
                </div>

                <div className="grid grid-cols-1 mt-8 lg:grid-cols-3 gap-x-4 gap-y-8">
                    {
                        products?.map((item) => {
                            const { _id, image, name, description, price, min_order, available } = item
                            return (
                                <div className="border border-gray-100 flex flex-col justify-between" key={_id}>
                                    <img
                                        loading="lazy"
                                        alt="Build Your Own Drone"
                                        className="object-contain w-full h-56"
                                        src={image}
                                    />

                                    <div className="p-6 flex flex-col w-full  justify-between">
                                        <div className="">
                                            <p className="text-sm font-medium text-gray-600">
                                                ${price}/unit
                                            </p>

                                            <h5 className="mt-1 text-lg font-bold">
                                                {name}
                                            </h5>
                                            <div className=" flex  my-3 justify-evenly border-y-2">
                                                <p className="text-sm font-bold text-gray-600 flex flex-col text-center ">
                                                   <span> Min-Order Quantity</span> <span className='text-emerald-400'>{min_order} units</span>
                                                </p>
                                                <div className="divider lg:divider-horizontal"></div>
                                                <p className="text-sm font-bold text-gray-600 flex flex-col text-center">
                                                   <span> Available Quantity</span> <span  className='text-emerald-400'>{available} units</span>

                                                </p>

                                            </div>
                                            <p className="text-sm font-medium text-gray-600 line-clamp-4">
                                                {description}
                                            </p>
                                        </div>
                                        <button
                                            name="add"
                                            type="button"
                                            className="flex items-center duration-300 justify-center w-full px-12 py-3 mt-8 text-sm font-medium text-white bg-pink-600 border border-pink-600 rounded active:text-pink-500 hover:bg-transparent hover:text-pink-600 focus:outline-none focus:ring"
                                            onClick={()=>navigate(`/purchasePage/${_id}`)}
                                        >
                                            <span className="text-sm font-medium">
                                                Place Order
                                            </span>

                                            <svg
                                                className="w-5 h-5 ml-1.5"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                        </button>
                                       
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

               
            </div>
        </section>
    )
}
