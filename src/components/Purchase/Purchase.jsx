import React from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../api/privateAxios';
import Loader from '../../utilities/Loader';

export default function Purchase({ productID }) {
    const { isLoading, error, data: product } = useQuery('product', () => privateAxios(`/product/${productID}`).then(result => result.data))
//   const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({ resolver: yupResolver(productSchema) });

    const navigate = useNavigate();
    if (isLoading) return <Loader />;
    console.log('product', product);
    const { _id, image, name, description, price, min_order, available } = product
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <div className="group">
                            <img
                                class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[350px]"
                                src={image}
                                alt="Basic Tee Product"
                            />
                        </div>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Speed Battery Manufacturer</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
                        <div className="flex mb-4">
                            <p className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</p>

                        </div>
                        <p className="leading-relaxed mb-4">{description}</p>

                    </div>
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">


                        <section>
                            <h1 className="sr-only">Checkout</h1>

                            <div className="relative mx-auto max-w-screen-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-1">



                                    <div className="py-12 bg-white md:py-24">
                                        <div className="max-w-lg px-4 mx-auto lg:px-8">
                                            <div className="flex border-t border-gray-200 py-2">
                                                <span className="text-gray-500">Name</span>
                                                <span className="ml-auto text-gray-900">Md Ishaq</span>
                                            </div>
                                            <div className="flex border-t border-gray-200 py-2">
                                                <span className="text-gray-500">Email</span>
                                                <span className="ml-auto text-gray-900">ishaqrabbu97@gmail.com</span>
                                            </div>
                                            <div className="flex border-t border-gray-200 py-2">
                                                <span className="text-gray-500">Price</span>
                                                <span className="ml-auto text-gray-900">${price}/unit</span>
                                            </div>
                                            <div className="flex font-bold border-t border-b mb-6 border-gray-200 py-2">
                                                <span className="text-gray-500">Total</span>
                                                <span className="ml-auto text-gray-900">$4</span>
                                            </div>
                                           
                                           
                                           
                                            <form className="grid grid-cols-6 gap-4">
                                                <div className="col-span-3">
                                                    <label className="block mb-1 text-sm text-gray-600" htmlFor="first_name">
                                                        Quantity
                                                    </label>

                                                    <input
                                                        className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                                        type="text"
                                                        id="frst_name"
                                                    />
                                                </div>

                                                <div className="col-span-3">
                                                    <label className="block mb-1 text-sm text-gray-600" htmlFor="phone">
                                                        Phone
                                                    </label>

                                                    <input
                                                        className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                                                        type="tel"
                                                        id="phone"
                                                    />
                                                </div>

                                                <div className="col-span-6">
                                                    <label className="block mb-1 text-sm text-gray-600" htmlFor="address">
                                                        Delivery Address
                                                    </label>

                                                    <textarea
                                                        className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800"
                                                        placeholder="address"
                                                        rows="4"
                                                        id="address"
                                                    // {...register("address")}
                                                    ></textarea>
                                                </div>



                                                <div className="col-span-6">
                                                    <button
                                                        className="btn-pink w-full"
                                                        type="submit"
                                                    >
                                                        Confirm order
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </section>
    )
}
