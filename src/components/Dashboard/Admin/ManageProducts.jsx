import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { privateAxios } from '../../../api/privateAxios';
import Loader from '../../../utilities/Loader';
export default function ManageProducts() {
  const { isLoading, error, refetch, data: products } = useQuery('product_all', () => privateAxios('/product_all').then(result => result.data))
  const navigate = useNavigate();


  if (isLoading) return <Loader />;
  const orderTable = ["", "Product Name", "Available", "Unit Price", "Min Order", "", ""]

  const deleteHandler = async (id) => {
    const value = await swal({ title: `Do you want to DELETE this item ?`, buttons: true, dangerMode: true, icon: "warning" })
    if (!value) return;
    privateAxios.delete(`/product/${id}`).then(({ data }) => {
      if (data.success) {
        toast.success(data.message)
        refetch();
      }
    })
  }

  return (
    <section className="relative ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

          <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
            Manage Products
          </h2>
        </div>
        <div className="overflow-x-auto mb-32 mt-10">

          <table className="min-w-full text-sm divide-y divide-gray-200 ">
            <thead>
              <tr>

                {orderTable.map((item, index) => {

                  return (
                    <th key={index} className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        {item}

                      </div>
                    </th>
                  )
                })}

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {
                products?.map((item, i) => {
                  const { _id, name, price, min_order, available } = item

                  return (
                    <tr key={_id}>
                      <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="p-4 font-medium text-gray-900  break-words">
                        {name}
                      </td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">{available} units</td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">{price}/unit</td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">{min_order} units</td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">
                        <button className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-emerald-500 rounded group  focus:outline-none focus:ring" onClick={() => navigate(`/dashboard/updateProduct/${_id}`)}>
                          <span className="text-sm font-medium ">
                            Update
                          </span>
                        </button>
                      </td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">
                        <button className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-pink-500 rounded group  focus:outline-none focus:ring-0" onClick={() => deleteHandler(_id)}>
                          <span className="text-sm font-medium ">
                            Delete
                          </span>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className="fixed bottom-10 w-52 right-3 opacity-30 hover:opacity-100 duration-300">
        <button
          type="button"
          className="inline-flex font-medium uppercase items-center  shadow-2xl   justify-center  px-5 py-2 text-white bg-emerald-600 rounded-lg sm:w-auto"
          onClick={() => navigate('/dashboard/createNewProduct')}
        >
          Add New Product


        </button>

      </div>


    </section >
  )
}
