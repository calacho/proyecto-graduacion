import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, user, loading } = useAuth();

  // Mientras verificamos token, mostramos loading
  if (loading) {
    return <div className="text-center p-5">Verificando sesión...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si hay restricción de roles
  if (allowedRoles && !allowedRoles.includes(user?.rol)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
