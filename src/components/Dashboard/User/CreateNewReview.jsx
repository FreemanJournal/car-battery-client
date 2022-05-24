import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings/build/star-ratings';
export default function CreateNewReview() {
  const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm();
  const [imgFile, setImgFile] = useState();
  const [ratings, setRatings] = useState();
  



  const navigate = useNavigate();
  function changeRating( newRating, name ) {
    setRatings(newRating)
    setValue(name,newRating)
  }
  const onSubmitHandler = (value) => {
   
    console.log('value', value);
    // privateAxios.post(`/product`, value)
    //   .then(({ data }) => {
    //     if (data.success) {
    //       toast.success(data.message)
    //       reset();
    //       setImgFile();
    //       navigate('/dashboard/manageProduct')
    //     }
    //   })
  }

  return (


    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-5">
            <h2 className='uppercase font-bold mb-5'>Give a review</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
              <div className='relative'>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    {imgFile ? <img src={imgFile} alt="doctor" /> :
                      <>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24"><path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path></svg></>
                    }
                  </span>

                  <label
                    htmlFor='file-upload'
                    className="ml-5 bg-white py-2 px-3  rounded-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 "
                  >
                    <div className="flex gap-3">

                      <span>Md Ishaq</span>
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

