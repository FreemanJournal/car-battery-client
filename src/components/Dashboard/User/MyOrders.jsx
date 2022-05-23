import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { privateAxios } from '../../../api/privateAxios';
import Loader from '../../../utilities/Loader';

export default function MyOrders() {
  // const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { isLoading, data } = useQuery(['orders'], () =>
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
  const orderTable = ["","Product Name", "Purchase qtn","Rate" ,"Total", "Transaction ID", "Payment"]


  return (
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
            data?.map((order,i) => {
              const { _id, address,phone,quantity,name,email,rate,total,orderID,paid,transactionId } = order;
              return (
                <tr key={_id}>

                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {i+1}
                  </td>
                  <td className="p-4 font-medium text-gray-900  break-words">
                    {name}
                  </td>

                  <td className="p-4 text-gray-700 whitespace-nowrap">{quantity}</td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">${rate}/unit</td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">${total}</td>
                  <td className="p-4 text-gray-700 whitespace-nowrap">{transactionId ? transactionId : "NULL"}</td>

                  <td className="p-4 text-gray-700 whitespace-nowrap">{!paid ?
                    <Link to={`/dashboard/payment/${_id}`} className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-pink-600 rounded group hover:bg-pink-600 focus:outline-none focus:ring">
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
                    <p className="relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-emerald-500 rounded group  focus:outline-none focus:ring" >
                      <span className="text-sm font-medium ">
                        Paid
                      </span>
                    </p>
                  }</td>

                </tr>
              )
            })
          }


        </tbody>
      </table>
    </div>
  )
}
