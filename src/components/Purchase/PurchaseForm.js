import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { purchaseSchema } from '../../utilities/purchaseSchema';
import { v4 as uuidv4 } from 'uuid';
import { privateAxios } from '../../api/privateAxios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../utilities/firebase.init';
export default function PurchaseForm({ price, min_order, available, name }) {
    const { register, handleSubmit, setValue, reset, setError, clearErrors, watch, formState: { errors } } = useForm({ resolver: yupResolver(purchaseSchema) });
    const watchQuantity = watch("quantity");
    const watchPhone = watch("phone");
    const watchAddress = watch("address");
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        reset({
            quantity: min_order
        })
    }, [min_order])

    useEffect(() => {
        if (+watchQuantity < min_order || +watchQuantity > available) {
            setError('quantity', { types: ["min", "max"], message: `Insert a value between ${min_order}-${available}` })

        } else {
            clearErrors()
        }
    }, [watchQuantity])
    const navigate = useNavigate();

    const onSubmitHandler = (value) => {
        console.log(value);
        privateAxios.post('/order', value)
            .then(({ data }) => {
                if (data.success) {
                    toast.success("An order placed successfully")
                    reset()
                    navigate('/dashboard')
                }
            })

    }
    const onClickHandler = () => {
        setValue('name', name)
        setValue('customer_Name', user?.displayName)
        setValue('email', user?.email)
        setValue('rate', price)
        setValue('total', price * (+watchQuantity))
        setValue('orderID', uuidv4());

    }
    return (
        <div className="max-w-lg px-4 mx-auto lg:px-8 h-full flex flex-col">
            <div className="h-1/2">
                <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Name</span>
                    <span className="ml-auto text-gray-900">{user?.displayName}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Email</span>
                    <span className="ml-auto text-gray-900">{user?.email}</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Minimum Order Quantity</span>
                    <span className="ml-auto text-gray-900">{min_order} units</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Maximum Order Quantity</span>
                    <span className="ml-auto text-gray-900">{available} units</span>
                </div>
                <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Price</span>
                    <span className="ml-auto text-gray-900">${price}/unit</span>
                </div>
                <div className="flex font-bold border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-gray-500">Total</span>
                    <span className="ml-auto text-gray-900">${price * (+watchQuantity)}</span>
                </div>
            </div>



            <form className=" flex flex-col  h-1/2" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                        <label className="block mb-1 text-sm text-gray-600" htmlFor="quantity">
                            Quantity
                        </label>

                        <input
                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5 focus:ring-slate-600 focus:border-0"
                            type="number"
                            id="quantity"
                            defaultValue={min_order}
                            {...register("quantity", { min: min_order, max: available })}

                        />
                        {errors?.quantity && <p className='text-sm'><span className='text-pink-500'>{errors?.quantity.message}</span></p>}

                    </div>

                    <div className="col-span-3">
                        <label className="block mb-1 text-sm text-gray-600" htmlFor="phone">
                            Phone
                        </label>

                        <input
                            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5 focus:ring-slate-600 focus:border-0"
                            type="number"
                            id="phone"
                            {...register("phone")}

                        />
                        {errors?.phone && <p className='text-sm'><span className='text-pink-500'>{errors?.phone.message}</span></p>}

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
                            {...register("address")}
                        ></textarea>
                        {errors?.address && <p className='text-sm'><span className='text-pink-500'>{errors?.address.message}</span></p>}

                    </div>
                </div>



                <button
                    className="btn-pink w-full disabled:hover:text-white disabled:bg-slate-300 disabled:border-0 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!watchQuantity || !watchAddress || !watchPhone || !!errors.quantity}
                    onClick={onClickHandler}

                >
                    Confirm order
                </button>
            </form>
        </div>
    )
}
