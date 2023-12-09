import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/authContext";

export function AuthenticatedRoutes () {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) return <p>Loading...</p>
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />
  return <Outlet />
}

export function UnathenticatedRoutes () {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/tasks" replace />
  return <Outlet />
}
