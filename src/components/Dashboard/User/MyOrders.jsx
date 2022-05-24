import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { privateAxios } from '../../../api/privateAxios';
import Loader from '../../../utilities/Loader';

export default function MyOrders() {
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, data,refetch } = useQuery(['orders'], () =>
    privateAxios(`/order`).then(res => {
      // if (res.status !== 200) {
      //   signOut(auth)
      //   localStorage.removeItem('accessToken')
      //   return navigate('/signIn')
      // }
      return res.data;
    }
    ))

  if (isLoading) {
    return <Loader />
  }
  const orderTable = ["", "Product Name", "Purchase qtn", "Rate", "Total", "Transaction ID", "Payment", ""]
  const deleteHandler = async (id) =>{
    const value = await swal({title:`Do you want to DELETE this order ?`,dangerMode:true,buttons:true,icon:"warning"})
    if (!value) return;
    privateAxios.delete(`/order/${id}`).then(({data})=>{
     if(data.success){
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
            My Orders
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
                data?.map((order, i) => {
                  const { _id, address, phone, quantity, name, email, rate, total, orderID, paid, transactionId } = order;
                  return (
                    <tr key={_id}>

                      <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="p-4 font-medium text-gray-900  break-words">
                        {name}
                      </td>

                      <td className="p-4 text-gray-700 whitespace-nowrap">{quantity}</td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">${rate}/unit</td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">${total}</td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">{transactionId ? transactionId : "NULL"}</td>

                      <td className="p-4 text-gray-700 whitespace-nowrap">{!paid ?
                        <Link to={`/dashboard/payment/${_id}`} className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-pink-600 rounded group hover:bg-pink-600 focus:outline-none focus:ring">
                          <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>

                          <span className="text-sm font-medium transition-all group-hover:mr-4">
                            Pay
                          </span>
                        </Link>
                        :
                        <p className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-emerald-500 rounded group  focus:outline-none focus:ring" >
                          <span className="text-sm font-medium ">
                            Paid
                          </span>
                        </p>
                      }</td>
                      <td className="p-4 text-gray-700 whitespace-nowrap">
                        <button className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-pink-500 rounded group  focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50" onClick={()=>deleteHandler(_id)} disabled={!!paid}>
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
