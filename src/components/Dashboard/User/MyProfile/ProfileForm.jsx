import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { privateAxios } from '../../../../api/privateAxios';
import auth from '../../../../utilities/firebase.init';

export default function ProfileForm({ userData,refetch }) {
    console.log('userData',userData);

    const [user, loading, error] = useAuthState(auth);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({defaultValues:{...userData}});

    // useEffect(() => {
    //     reset({...userData})
    // }, [userData])

    const submitHandler = async (value) => {
        const { data } = await privateAxios.post('/user', value)
        if (data.success) {
            toast.success('You have successfully update your profile.')
        }
    }
    return (
        <section className="bg-gray-100">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">


                    <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-5">
                        <p href="" className="text-xl font-bold text-pink-600 mb-5 "> My profile </p>

                        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">


                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="username">Name</label>
                                    <input
                                        className="w-full p-3 text-sm border-gray-200 rounded-lg cursor-not-allowed  focus:ring-0 focus:border-gray-200"
                                        placeholder="username"
                                        readOnly
                                        value={userData.displayName}
                                        type="text"
                                        id="username"

                                        {...register("username")}
                                    />
                                </div>
                                <div>
                                    <label className="" htmlFor="email">Email</label>
                                    <input
                                        className="w-full p-3 text-sm border-gray-200 rounded-lg cursor-not-allowed  focus:ring-0 focus:border-gray-200"
                                        placeholder="Email address"
                                        readOnly
                                        value={userData.email}
                                        type="email"
                                        id="email"
                                        {...register("email")}
                                    />
                                </div>


                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Ex: +8801855521296"
                                        type="tel"
                                        id="phone"
                                        required
                                        {...register("phone")}
                                    />
                                </div>

                                <div>
                                    <label className="" htmlFor="education">Education</label>
                                    <input
                                        className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Ex:-SSC,HSC,Honours etc."
                                        type="text"
                                        id="education"
                                        required
                                        {...register("education")}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="" htmlFor="linkedIn">LinkedIn</label>
                                    <input
                                        className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Ex:-https://www.linkedin.com/in/md-ishaque-29b43612a"
                                        type="text"
                                        id="linkedIn"
                                        {...register("linkedIn")}
                                    />
                                </div>

                                <div>
                                    <label className="" htmlFor="location">Location</label>
                                    <input
                                        className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                                        placeholder="Ex:-(3rd floor), mauban super market, shantinagar, 1217"
                                        type="text"
                                        id="location"
                                        {...register("location")}
                                    />
                                </div>
                            </div>




                            <div className="mt-4">
                                <div className="mt-4 flex gap-5 justify-end">
                                    <button
                                        type="submit"
                                        className="inline-flex font-medium uppercase items-center  justify-center  px-5 py-2 text-white bg-pink-600 rounded-lg sm:w-auto"
                                        onClick={() => reset()}
                                    >
                                        Reset


                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex font-medium uppercase items-center  justify-center  px-5 py-2 text-white bg-emerald-400 rounded-lg sm:w-auto"


                                    >
                                        Update


                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
