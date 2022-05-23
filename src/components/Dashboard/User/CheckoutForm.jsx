import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { privateAxios } from '../../../api/privateAxios';
import Loader from '../../../utilities/Loader';

export default function CheckoutForm({ order }) {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState();
    const [cLientSecret, setCLientSecret] = useState();
    const [transectionId, setTransactionId] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { _id, address, phone, quantity, name, email, rate, total, orderID, paid, transactionId } = order;


    // useEffect(() => {
    //     privateAxios.post(`/create-payment-intent`, { total })
    //         .then(({ data }) => {
    //             setCLientSecret(data?.clientSecret)
    //         })

    // }, [total])

    console.log('cLientSecret',cLientSecret);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        // setIsLoading(prev => !prev)
        // if (!stripe || !elements) return;
        // const card = elements.getElement(CardElement);
        // if (card == null) return;
        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card,
        // });

        // if (error) {
        //     setCardError(error.message)
        //     // console.log('[error]', error);
        // } else {
        //     setCardError()

        // }

        // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        //     cLientSecret,
        //     {
        //         payment_method: {
        //             card: card,
        //             billing_details: {
        //                 name: "Md Ishaq",
        //                 email: email,
        //                 phone: phone
        //             },
        //         },
        //     },
        // );
        // if (intentError) {
        //     setIsLoading(prev => !prev)
        //     setCardError(intentError?.message)
        // } else {
        //     const paymentInfo = {
        //         transactionId: paymentIntent.id,
        //         name: "Md Ishaq",
        //         email: email,
        //         phone: phone
        //     }
        //     console.log('paymentInfo', paymentInfo);
        //     setTransactionId(paymentIntent.id)
        //     // axios.patch(`${process.env.REACT_APP_SERVER_URI}/appointment/${_id}`, paymentInfo, {
        //     //     headers: {
        //     //         "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        //     //     }
        //     // })
        //     //     .then(({ data }) => {
        //     //         setIsLoading(prev => !prev)
        //     //         toast.success(data.message,{toastId:"Hello"})
        //     //     })
        //     toast.success(`Your payment is successful.Transaction ID is :${paymentIntent.id}`)
        //     setCardError('');
        // }


    };

    // if (isLoading) {
    //     return <Loader />
    // }


    return (
        <div>
            <form className=" flex flex-col  h-1/2" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />



                <button
                    className="btn-pink w-full disabled:hover:text-white disabled:bg-slate-300 disabled:border-0 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!stripe || !cLientSecret}

                >
                    Confirm Payment
                </button>
            </form>
            {cardError && <p className='text-pink-500'>{cardError}</p>}

        </div>
    )
}
