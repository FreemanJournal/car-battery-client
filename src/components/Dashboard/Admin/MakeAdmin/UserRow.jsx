import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import { privateAxios } from '../../../../api/privateAxios';
import useAdmin from '../../../../hooks/useAdmin';
import auth from '../../../../utilities/firebase.init';

export default function UserRow({ refetch, user, index,isAdmin }) {
    const { _id, displayName, email,isAdmin:amIAdmin } = user;
    const [authUser, loading, error] = useAuthState(auth);

    const adminHandler = async () => {
        const { data } = await privateAxios.put('/user/admin', { email, status: true })
        if (data.success) {
            toast.success(`${displayName} become a admin`)
            refetch();
        }
    }
   
    const deleteHandler = async (email) => {
        const value = await swal({ title: `Do you want to DELETE this user ?`, buttons: true, dangerMode: true, icon: "warning" })
        if (!value) return;
        privateAxios.delete(`/user/${email}`).then(({ data }) => {
            if (data.success) {
                toast.success(data.message)
                refetch();
            }
        })
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


            <td className="p-4 text-gray-700 whitespace-nowrap">
                <p className={`${!!amIAdmin ? 'text-emerald-500' : 'text-pink-500'}`} >
                    <span className="text-sm font-medium ">
                        {!!amIAdmin ? "Admin" : "User"}
                    </span>
                </p>

            </td>
            <td className="p-4 text-gray-700 whitespace-nowrap">
                <button className={`relative inline-flex items-center px-5 py-2 overflow-hidden text-white ${!!isAdmin ? "bg-emerald-400" : "bg-pink-500 hover:bg-pink-700"} rounded group  focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50`} onClick={adminHandler} disabled={email === authUser?.email || !isAdmin}>
                    <span className="text-sm font-medium ">
                        Make Admin
                    </span>
                </button>
            </td>
      
            <td className="p-4 text-gray-700 whitespace-nowrap">
                <button className="relative inline-flex items-center px-8 py-2 overflow-hidden text-white bg-pink-500 hover:bg-pink-700 rounded group  focus:outline-none focus:ring-0 focus:border-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-pink-500" onClick={() => deleteHandler(email)} disabled={email === authUser?.email || !isAdmin}>
                    <span className="text-sm font-medium ">
                        Delete
                    </span>
                </button>
            </td>


        </tr>
    )
}
