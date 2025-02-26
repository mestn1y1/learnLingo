import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
export default function PrivateRoute({ children, authUser }) {
  return authUser ? children : <Navigate to="/" replace />;
}
