import { Navigate } from "react-router-dom";
import { UseAuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = UseAuthContext();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
