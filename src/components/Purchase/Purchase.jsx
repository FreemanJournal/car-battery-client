import React from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../api/privateAxios';
import Loader from '../../utilities/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import { purchaseSchema } from '../../utilities/purchaseSchema';
import PurchaseForm from './PurchaseForm';

export default function Purchase({ productID }) {
    const { isLoading, error, data: product } = useQuery('product', () => privateAxios(`/product/${productID}`).then(result => result.data))


    const navigate = useNavigate();
    if (isLoading) return <Loader />;
    const { _id, image, name, description, price, min_order, available } = product
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <div className="group">
                            <img
                                className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[350px]"
                                src={image}
                                alt="Basic Tee Product"
                            />
                        </div>
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Speed Battery Manufacturer</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>
                        <div className="flex mb-4">
                            <p className="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">Description</p>

                        </div>
                        <p className="leading-relaxed mb-4">{description}</p>

                    </div>
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <PurchaseForm price={price} min_order={min_order} available={available} name={name}/>
                    </div>

                </div>
            </div>
        </section>
    )
}
