import React, { useCallback, useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useAuthProviderHandler from '../../hooks/useAuthProviderHandler';
import auth from '../../utilities/firebase.init';


export default function Authorization({ signIn }) {
  const [user, loading, error] = useAuthState(auth);
  
  // const [signInWithGoogle, googleUser, googleSignInLoading, googleSignInError] = useSignInWithGoogle(auth);

  const { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword,signInWithGoogle, errorMessage, authLoading, setAuthProvider } = useAuthProviderHandler()
//   const { getUser } = useContext(GlobalContext);



  // Form Data
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();

  const createUser = async (user) => {
    const { email, displayName } = user || {}
    const userData = {
      username: displayName || userName.current?.value,
      email_address: email || userEmail.current?.value,
      shortBio: ''
    }
    // // create access token
    // const { data } = await axios.post(`${process.env.REACT_APP_uri}/login`, { email })
    // localStorage.setItem('accessToken', data.accessToken)

    // // create first user profile
    // const userInfo = await getUser(email);
    // if (!userInfo) {
    //   const uri = `${process.env.REACT_APP_uri}/user/update`
    //   user && axios.post(uri, userData)
    // }
  }

 

  useEffect(()=>{
    createUser(user)
  },[user])

  const onSubmitHandler = useCallback(async (e) => {
    e.preventDefault();

    const formData = {
      displayName: userName.current?.value,
      email: userEmail.current?.value,
      password: userPassword.current?.value
    }
    if (signIn) {
      const { email, password } = formData
      setAuthProvider('signIn')
      signInWithEmailAndPassword(email, password)

    } else {
      const { displayName, email, password } = formData
      setAuthProvider('signUp')
      createUserWithEmailAndPassword(email, password)
        .then(() => {
          setAuthProvider('updating')
          updateProfile({ displayName })
        })
    }
  }, [signIn]);

  const googleSignInHandler = () => {
    setAuthProvider('googleSignIn')
    signInWithGoogle()
  }

  // Redirect

  const location = useLocation()
  let navigate = useNavigate();

  useEffect(() => {
    let from = location.state?.from?.pathname || "/";
    user && navigate(from, { replace: true })
  }, [user])




  return (
    <div className='w-96 md:w-4/12 mx-auto mt-16'>
      
      <div className="text-center">
        <h2 className='text-4xl text-slate-600 font-semibold'>{signIn ? 'Welcome Back' : 'Speed Battery Manufacturer'}</h2>
        <Link to={signIn ? '/registration' : '/signIn'} className='my-3 block text-emerald-500'>{signIn ? 'Need an account?' : 'Have an account?'}</Link>
      </div>
      <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className=" flex flex-col gap-5">
          {!signIn && <div>
            <label htmlFor="username" className="sr-only">
              Name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              ref={userName}
            />
          </div>}
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              ref={userEmail}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              ref={userPassword}
            />
          </div>

        </div>
        {/* <p>{errorMessage}</p> */}
        <div>
          <button
            type="submit"
            className="w-24 group relative flex justify-center ml-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            {signIn ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </form>
      <div className="flex flex-col ">
        <div className="flex gap-3 justify-center items-center">
          <hr className='w-96 border border-b-0 border-zinc-300' />
          <p className="mt-2 mb-4 text-center text-sm text-gray-600">
            Or{' '}
          </p>
          <hr className='w-96 border border-b-0 border-zinc-300' />

        </div>

        <button onClick={googleSignInHandler}
          className=" flex gap-1 justify-center font-semibold border border-zinc-400 py-2 px-10 shadow-md rounded-md  text-emerald-600 hover:text-emerald-500" >
          <FcGoogle className='font-bold text-2xl' /><span>Continue with google</span>
        </button>
      </div>

    </div>
  )
}
