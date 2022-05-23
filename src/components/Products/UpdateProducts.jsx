import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { privateAxios } from '../../api/privateAxios';
import Loader from '../../utilities/Loader';
import { UpdateProductSchema } from '../../utilities/UpdateProductSchema';
export default function UpdateProducts() {
  const { productID } = useParams()
  const navigate = useNavigate();
  const { isLoading, error, data: product } = useQuery('product', () => privateAxios(`/product/${productID}`).then(result => result.data))

  const { _id, name, description, price, min_order, available } = product || {}

  const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm({
    resolver: yupResolver(UpdateProductSchema)
  });

  useEffect(() => {
    const result = { 'name': name, 'description': description, 'price': price, 'min_order': min_order, 'available': available }
    reset(result);
  }, [product])


  const onSubmitHandler = (value) => {
    value.id = _id
    privateAxios.put(`/product`, value)
      .then(({ data }) => {
        if (data.success) {
          toast.success(data.message)
          reset();
          navigate('/dashboard/manageProduct')
        }
      })
  }
  if (isLoading) return <Loader />;
  return (


    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-5">
            <h2 className='uppercase font-bold mb-5'>Update product</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
              <div>
                <label className="" htmlFor="name">Name</label>
                <input className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800" placeholder="Name" type="text" id="name" required {...register("name")} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="" htmlFor="min_order">Minimum order limit</label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800"
                    placeholder="Minimum order limit"
                    type="text"
                    inputMode="numeric"
                    id="min_order"
                    required
                    {...register("min_order")}
                  />
                  {errors?.min_order && <p className='text-sm'><span className='text-pink-500'>{errors?.min_order.message}</span></p>}

                </div>

                <div >
                  <label className="" htmlFor="available">Available products</label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-0 focus:outline-none focus:border-slate-800"
                    placeholder="Available products"
                    type="text"
                    inputMode="numeric"
                    id="available"
                    required
                    {...register("available")}
                  />
                  {errors?.available && <p className='text-sm'><span className='text-pink-500'>{errors?.available.message}</span></p>}

                </div>
                <div >
                  <label className="" htmlFor="price">Price per unit</label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg focus:ring-0 focus:outline-none focus:border-slate-800"
                    placeholder="Price per unit"
                    type="text"
                    inputMode="numeric"
                    id="price"
                    required
                    {...register("price")}
                  />
                  {errors?.price && <p className='text-sm'><span className='text-pink-500'>{errors?.price.message}</span></p>}

                </div>
              </div>



              <div>
                <label className="" htmlFor="description">Description</label>
                <textarea
                  className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800"
                  placeholder="Description"
                  rows="8"
                  id="description"
                  {...register("description")}
                ></textarea>
              </div>


              <div className="mt-4 flex gap-5 justify-end">
                <button
                  type="submit"
                  className="inline-flex font-medium uppercase items-center  justify-center  px-5 py-2 text-white bg-pink-600 rounded-lg sm:w-auto"
                >
                  Update


                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
      

    </section>
  )
}

