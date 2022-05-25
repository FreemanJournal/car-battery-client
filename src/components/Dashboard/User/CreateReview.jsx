import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { set, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings/build/star-ratings';
import { toast } from 'react-toastify';
import { privateAxios } from '../../../api/privateAxios';
import auth from '../../../utilities/firebase.init';
let userImage;
export default function CreateNewReview() {
  const [user, loading, error] = useAuthState(auth);

  const { register, handleSubmit, setValue,setError,clearErrors, reset, watch, formState: { errors } } = useForm();
  const [imgFile, setImgFile] = useState();
  const [ratings, setRatings] = useState();
  const convert2base64 = file => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgFile(reader.result.toString())
    }
    reader.readAsDataURL(file)

  }

  useEffect(() => {
    if (user?.photoURL) {
      userImage = <img src={user?.photoURL} alt="user" />
    } else {
      userImage = <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg>
    }

  }, [user])


  const navigate = useNavigate();
  function changeRating(newRating, name) {
    setRatings(newRating)
    setValue(name, newRating)
    setValue('user',user?.displayName)
    clearErrors();
  }
  const onSubmitHandler = (value) => {
    console.log('value', value);
   
    if(!value.rating ){
      return setError('rating', {type:'required',message:"Please give a rating!"})
    }
  
    privateAxios.post(`/review`, value)
      .then(({ data }) => {
        if (data.success) {
          toast.success("You have posted a new review.")
          reset();
          setRatings()
          navigate('/')
        }
      })
  }

  return (


    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-5">
          <p href="" className="text-xl font-bold text-pink-600 mb-5"> Give a review </p>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
              <div className='relative'>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    {userImage}
                  </span>

                  <label
                    htmlFor='file-upload'
                    className="ml-5 bg-white py-2 px-3  rounded-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 "
                  >
                    <div className="flex gap-3">

                      <span>{user?.displayName}</span>
                    </div>
                  </label>
                </div>

              </div>
              <div>
                <label className="sr-only" htmlFor="name">Rating</label>

                <StarRatings
                  rating={ratings}
                  starRatedColor="rgb(250 204 21 / 1)"
                  changeRating={changeRating}
                  numberOfStars={5}
                  name='rating'
                />

              </div>





              <div>
                <label className="sr-only" htmlFor="comment">Comment</label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800"
                  placeholder="Comment"
                  rows="8"
                  id="comment"
                  required
                  {...register("comment")}
                ></textarea>
              </div>

              {errors?.rating && <p className='text-sm'><span className='text-pink-500'>{errors?.rating.message}</span></p>}



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
                  Post


                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

