import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuth.accessToken
  );

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
