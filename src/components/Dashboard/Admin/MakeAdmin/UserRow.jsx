import React, { useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { privateAxios } from '../../../../api/privateAxios';

export default function UserRow({ refetch,  user, index }) {
    const { _id, displayName,email } = user;
    const shipmentHandler = () => {
        // privateAxios.patch(`/shipping/${_id}`)
        //     .then(({ data }) => {
        //         toast.success(data.message, { toastId: "bro" })
        //         refetch()
        //     })
    }
    const deleteHandler = async (id) => {
        // const value = await swal({ title: `Do you want to DELETE this order ?`, buttons: true, dangerMode: true, icon: "warning" })
        // if (!value) return;
        // privateAxios.delete(`/order/${id}`).then(({ data }) => {
        //     if (data.success) {
        //         toast.success(data.message)
        //         refetch();
        //     }
        // })
    }
    return (
        <tr>

            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                {index + 1}
            </td>
            <td className="p-4 font-medium text-gray-900  break-words">
                {displayName}
            </td>

            <td className="p-4 text-gray-700 whitespace-nowrap">{email}</td>
            

            {/* <td className="p-4 text-gray-700 whitespace-nowrap">{
                <p className={`${!!paid ? 'text-emerald-500' : 'text-pink-500'}`} >
                    <span className="text-sm font-medium ">
                        {paid ? "Paid" : "Unpaid"}
                    </span>
                </p>

            }</td> */}
            {/* <td className="p-4 text-gray-700 whitespace-nowrap">
                {
                    !!paid ?
                        <button className={`relative inline-flex items-center px-8 py-2 overflow-hidden text-white ${!!isShipped?"bg-emerald-400":"bg-pink-500"} rounded group  focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50`} onClick={shipmentHandler} disabled={!!isShipped}>
                            <span className="text-sm font-medium ">
                                {!!isShipped ? "Shipped" : "Pending"}
                            </span>
                        </button>
                        :
                        <button className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-pink-500 rounded group  focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50" disabled>
                            <span className="text-sm font-medium ">
                                Pending
                            </span>
                        </button>
                }
            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
                <button className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-pink-500 rounded group  focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50" onClick={() => deleteHandler(_id)} disabled={!!paid}>
                    <span className="text-sm font-medium ">
                        Delete
                    </span>
                </button>
            </td> */}


        </tr>
    )
}
