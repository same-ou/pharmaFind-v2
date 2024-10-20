import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";


type Props = {children : React.ReactNode}

export const ProtectedRoute = ({children}: Props) => {
    const {isLoggedIn} = useAuth();
    const location = useLocation();
    return (
        <>
            {isLoggedIn() ? children : <Navigate to="/login" state={{from: location.pathname}} replace />}
        </>
    )
}