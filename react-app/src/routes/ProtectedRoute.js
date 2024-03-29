import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const loggedIn = sessionStorage.getItem('isLogged');
    if (loggedIn !== 'true') {
        return <Navigate to='/logowanie'/>;
    }
    return children;
}

export default ProtectedRoute;