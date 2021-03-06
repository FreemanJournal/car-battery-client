import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuthProviderHandler from '../../hooks/useAuthProviderHandler';
import auth from '../../utilities/firebase.init';
import Loader from '../../utilities/Loader';
export default function Authorization({ signIn }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user, loading, error] = useAuthState(auth);

    const { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithGoogle, errorMessage, authLoading, setAuthProvider } = useAuthProviderHandler()

    const createUser = async (user) => {
        if (!user?.displayName || !user?.email) return;
        const { displayName, email } = user
        const userData = {displayName, email}
        // create access token
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URI}/createToken`, {email})
        localStorage.setItem('accessToken', data.authAccessToken)
        // create user to database
        const uri = `${process.env.REACT_APP_SERVER_URI}/user`
        user && axios.post(uri, userData)
    }






    const onSubmitHandler = useCallback(async (value) => {
        if (signIn) {
            const { email, password } = value
            setAuthProvider('signIn')
            await signInWithEmailAndPassword(email, password)

        } else {
            const { displayName, email, password } = value
            setAuthProvider('signUp')
            createUserWithEmailAndPassword(email, password)
                .then(async () => {
                    setAuthProvider('updating')
                    await updateProfile({ displayName })
                    createUser({displayName,email})  
                })
        }
    }, [signIn])

    const googleSignInHandler = () => {
        setAuthProvider('googleSignIn')
        signInWithGoogle()
    }

    useEffect(() => {
        console.log('user',user);
        createUser(user)
    }, [!!user])



    // Redirect

    const location = useLocation()
    let navigate = useNavigate();

    useEffect(() => {
      let from = location.state?.from?.pathname || "/";
      user && navigate(from, { replace: true })
    }, [user])

    if (loading) {
        return <Loader />
    }

    return (
        <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-5">

            <div className="w-full px-6 py-8 md:px-8  mx-auto">
                <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">Speed Battery Manufacturer</h2>
                <p className="text-xl text-center text-gray-600 dark:text-gray-200">{signIn ? 'Welcome Back' : 'Welcome'}</p>
                <button onClick={googleSignInHandler} className="flex items-center w-full justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>
                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </button>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <a href="/" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login with email</a>
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    {
                        !signIn && <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="displayName">Username</label>
                            {/* pattern matches displayName like ishaqrabbu with no space and not number */}
                            <input required id="displayName" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text"  {...register("displayName")} />
                        </div>
                    }
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                        <input required id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" {...register("email")} />

                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                            <a href="/" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                        </div>
                        <input required id="loggingPassword" autoComplete='off' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" {...register("password", { minLength: 6 })} />
                        <label htmlFor="loggingPassword"> {errors.password?.type === 'minLength' && <span className='text-sm text-pink-600'>Must be 6 characters or longer!</span>}</label>

                    </div>
                    <div className="mt-8">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            {signIn ? 'Sign In' : 'Registration'}
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    {/* <a href="/" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a> */}
                    <Link to={signIn ? '/registration' : '/signIn'} className='my-3 block text-emerald-500 hover:underline'>{signIn ? 'Need an account?' : 'Have an account?'}</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    )
}
