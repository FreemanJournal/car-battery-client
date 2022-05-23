import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { privateAxios } from '../../../api/privateAxios';

export default function CheckoutForm({ order }) {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState();
    const [cLientSecret, setCLientSecret] = useState();
    const [transectionId, setTransactionId] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { _id, address, phone, quantity, name, email, rate, total, orderID, paid, transactionId } = order;
    console.log('payment info',phone,email,total);

    const navigate = useNavigate()
    useEffect(() => {
        privateAxios.post(`/create-payment-intent`, { total })
            .then(({ data }) => {
                setCLientSecret(data?.clientSecret)
            })

    }, [total])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        setIsLoading(prev => !prev)
        if (!stripe || !elements) return;
        const card = elements.getElement(CardElement);
        if (card == null) return;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
            // console.log('[error]', error);
        } else {
            setCardError()

        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            cLientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: "Md Ishaq",
                        email: email,
                        phone: phone
                    },
                },
            },
        );
        if (intentError) {
            setIsLoading(prev => !prev)
            setCardError(intentError?.message)
        } else {
            const paymentInfo = {
                transactionId: paymentIntent.id,
                name: "Md Ishaq",
                email: email,
                phone: phone,
                product:name
            }
            setTransactionId(paymentIntent.id)
            privateAxios.patch(`/payment/${_id}`, paymentInfo)
                .then(({ data }) => {
                    setIsLoading(prev => !prev)
                    toast.success(data.message,{toastId:"Hello"})
                    navigate('/dashboard')
                    
                })
            // toast.success(`Your payment is successful.Transaction ID is :${paymentIntent.id}`)
            setCardError('');
            setIsLoading(prev => !prev)
        }


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
                    disabled={!stripe || !cLientSecret || isLoading}

                >
                    {isLoading &&  <svg class="motion-reduce:hidden animate-spin ..." viewBox="0 0 24 24"></svg>}
                    Confirm Payment
                </button>
            </form>
            {cardError && <p className='text-pink-500'>{cardError}</p>}

        </div>
    )
}
