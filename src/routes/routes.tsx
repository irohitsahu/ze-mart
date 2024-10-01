import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginScreen from "../pages/login";
import App from "../App";
import WelcomeScreens from "../pages/welcome";
import SignUpScreen from "../pages/signup/SignUp";
import { ResetPassword } from "../pages/resetPassword/resetPassword";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<App />}>
        <Route path="home" element={<WelcomeScreens />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="signUp" element={<SignUpScreen />} />
        <Route path="resetPassword" element={<ResetPassword />} />
      </Route>
    </>
  )
);

export default routes;
