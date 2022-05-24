import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../utilities/firebase.init';
import Loader from '../utilities/Loader';


export default function PrivateRoute({ children }) {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <Loader/>
    }
    if (!user) {
        return <Navigate to="/signIn" state={{ from: location }} replace />
    }
    return children;
}
