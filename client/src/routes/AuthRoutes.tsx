import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const AuthRoute = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.userAuth.accessToken
  );

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default AuthRoute;
