import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { privateAxios } from '../../../api/privateAxios';
import Loader from '../../../utilities/Loader';
import PurchaseForm from '../../Purchase/PurchaseForm';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Payment() {
  const { productID } = useParams()
  const { isLoading, error, data: order } = useQuery('order', () => privateAxios(`/order/${productID}`).then(result => result.data))

  const navigate = useNavigate();
  if (isLoading) return <Loader />;
  const { _id, address, phone, quantity, name, email, rate, total, orderID, paid, transactionId } = order;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            {/* <div className="group">
                            <img
                                className="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[350px]"
                                src={image}
                                alt="Basic Tee Product"
                            />
                        </div> */}
            <h2 className="text-sm title-font text-gray-500 tracking-widest">#{orderID}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{name}</h1>


          </div>
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <div className="max-w-lg px-4 mx-auto lg:px-8 h-full flex flex-col">
              <div className="">
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Name</span>
                  <span className="ml-auto text-gray-900">Md Ishaq</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Email</span>
                  <span className="ml-auto text-gray-900">{email}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500"> Ordered Quantity</span>
                  <span className="ml-auto text-gray-900">{quantity} units</span>
                </div>

                <div className="flex border-t border-gray-200 py-2">
                  <span className="text-gray-500">Price</span>
                  <span className="ml-auto text-gray-900">${rate}/unit</span>
                </div>
                <div className="flex font-bold border-t border-b mb-6 border-gray-200 py-2">
                  <span className="text-gray-500">Total</span>
                  <span className="ml-auto text-gray-900">${total}</span>
                </div>
                <Elements stripe={stripePromise}>
                  <CheckoutForm order={order}/>
                </Elements>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
