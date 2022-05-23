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
  const { _id, address, image, phone, quantity, name, email, rate, total, orderID, paid, transactionId } = order;

  return (
    <section class="relative ">
      <div class=" px-4 py-8 mx-auto">
        <div class="relative mx-auto text-center">
          <span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>
          <h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-white">
            Order Details
          </h2>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto">
            <div className=" mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Delivery Address</h1>
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
                    <span className="text-gray-500">Phone</span>
                    <span className="ml-auto text-gray-900">{phone}</span>
                  </div>


                  <div className="flex font-bold border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-gray-500">Address</span>
                    <span className="ml-auto text-gray-900">{address}</span>
                  </div>

                </div>

              </div>
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <div className="max-w-lg px-4 mx-auto lg:px-8 h-full flex flex-col">
                  <div className="">
                    <div className="flex border-t border-gray-200 py-2 font-bold">
                      <span className="text-gray-500">Product Name</span>
                      <span className="ml-auto text-gray-900">{name}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Order ID</span>
                      <span className="ml-auto text-gray-900">{orderID}</span>
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
                      <CheckoutForm order={order} />
                    </Elements>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>




    </section >
  )
}
