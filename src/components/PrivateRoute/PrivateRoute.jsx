import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, authUser }) {
  if (authUser === undefined) {
    return null;
  }

  return authUser ? children : <Navigate to="/" replace />;
}
