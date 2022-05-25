import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../hooks/useAdmin";
import auth from "../utilities/firebase.init";
import Loader from "../utilities/Loader";


export default function AdminRoute({ children }) {
    const [user, loading, error] = useAuthState(auth);
    const { isAdmin, adminLoading } = useAdmin(user,loading)
    const location = useLocation();

    if (loading || adminLoading) {
        return <Loader />
    }

    if (!user || !isAdmin) {
        signOut(auth);
        return <Navigate to="/signIn" state={{ from: location }} replace />
    }
    return children;
}
