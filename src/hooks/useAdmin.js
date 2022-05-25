import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateAxios } from '../api/privateAxios';
import auth from '../utilities/firebase.init';

export default function useAdmin() {
    const [user, loading, error] = useAuthState(auth);
    const [isAdmin, setIsAdmin] = useState();

    privateAxios.get(`/user/${user?.email}`)
    .then(({data})=>{
        setIsAdmin(!!data.isAdmin)
    })

  return {isAdmin}
}
