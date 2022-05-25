import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../../../api/privateAxios';
import useAdmin from '../../../../hooks/useAdmin';
import auth from '../../../../utilities/firebase.init';
import Loader from '../../../../utilities/Loader';
import UserRow from './UserRow';

export default function MakeAdmin() { 
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const {isAdmin} = useAdmin(user, loading);
    const { isLoading, data, refetch } = useQuery(['users'], () =>
        privateAxios(`/user`).then(res => {
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
    const orderTable = ["", "Name", "Email",  "Status",""]
  

    return (
        <section className="relative ">
            <div className="max-w-screen-xl px-4 py-8 mx-auto">
                <div className="relative max-w-3xl mx-auto text-center">
                    <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

                    <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
                       Make Admin
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
                                data?.map((user, i) => <UserRow refetch={refetch} user={user} key={i} index={i} isAdmin={isAdmin}/>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </section >
    )
}
