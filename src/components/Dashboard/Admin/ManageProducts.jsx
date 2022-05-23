import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../../api/privateAxios';
import { GlobalContext } from '../../../context/GlobalContext';
import Loader from '../../../utilities/Loader';
import UpdateModal from '../../Products/UpdateModal';
export default function ManageProducts() {
  const { isLoading, error, data: products } = useQuery('products', () => privateAxios('/product').then(result => result.data))
  const navigate = useNavigate();
  const {updateItem, setUpdateItem} = useContext(GlobalContext)


  if (isLoading) return <Loader />;
  const orderTable = ["", "Product Name", "Available", "Unit Price", "Min Order", "", ""]

  return (
    <section class="relative">
      <div class="max-w-screen-xl px-4 py-8 mx-auto">
        <div class="relative max-w-3xl mx-auto text-center">
          <span class="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

          <h2 class="relative inline-block px-4 text-2xl font-bold text-center bg-white">
            Manage Products
          </h2>
        </div>
        <div className="overflow-x-auto mb-32">

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
                  const { _id, image, name, description, price, min_order, available } = item

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
                        <label for="productUpdateModal" className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-emerald-500 rounded group  focus:outline-none focus:ring" onClick={()=>navigate(`/dashboard/updateProduct/${_id}`)}>
                          <span className="text-sm font-medium ">
                            Update
                          </span>
                        </label>
                      </td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">
                        <button className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-pink-500 rounded group  focus:outline-none focus:ring" >
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

      
    

    </section >
  )
}
