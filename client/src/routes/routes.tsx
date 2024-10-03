import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginScreen from "../pages/auth/login";
import App from "../App";
import WelcomeScreens from "../pages/welcome";
import SignUpScreen from "../pages/auth/signup/SignUp";
import ResetPassword from "../pages/auth/resetPassword/resetPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import Category from "../pages/category/Category";
import Cart from "../pages/cart/Cart";
import Profile from "../pages/profile/Profile";
import Orders from "../pages/orders/Orders";
import Home from "../pages/home/Home";
import PrivateRoute from "./PrivateRoutes";
import AuthRoute from "./AuthRoutes";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<App />}>
        <Route element={<AuthRoute />}>
          <Route path="welcome" element={<WelcomeScreens />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="signUp" element={<SignUpScreen />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="category" element={<Category />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Route>
    </>
  )
);

export default routes;
