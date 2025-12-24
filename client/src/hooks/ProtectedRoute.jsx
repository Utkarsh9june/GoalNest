import { Navigate } from "react-router-dom"
import api from "../utils/axios"
import { API_PATHS } from "../utils/apiPaths"
import { useState, useEffect } from "react"

const ProtectedRoute = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => { api.get(API_PATHS.GOAL.GETGOALS, { withCredentials: true })
    .then(() => { setAuthenticated(true) })
    .catch(() => { setAuthenticated(false) })
    .finally(() => { setLoading(false) })
    }, []);

    if(loading) return null;

    if(!authenticated) return <Navigate to="/login" replace />
    
    return children;
}

export default ProtectedRoute