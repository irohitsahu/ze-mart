import { useState } from "react";
import { ChevronLeft, Eye, EyeOff, Phone, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import {
  GButton,
  GContentSectionCard,
  GInfoText,
  GInput,
  GMainScreenWrapper,
  GTitleTextBig,
} from "../../components/GlobalStyledComponents/GlobalStyledComponents";

export default function LoginContainer() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <GMainScreenWrapper>
      <header className="flex flex-col justify-start items-start w-full mt-10">
        <Link to="/home" className="p-2 rounded-full bg-black">
          <ChevronLeft />
        </Link>
        <h1 className="text-6xl font-bold text-center">
          SHop<span className="text-lime-400">.</span>
        </h1>
      </header>
      <GContentSectionCard>
        <GTitleTextBig>Welcome Back!</GTitleTextBig>
        <GInfoText>Enter your details below</GInfoText>

        <div className="relative w-full">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <GInput type="tel" placeholder="Mobile Number" />
        </div>

        <div className="relative w-full">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <GInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 text-gray-400 h-full w-10 p-0"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <GButton>Log In</GButton>

        <GInfoText>
          Forgot Password?<Link to={"/resetPassword"}> Reset Now</Link>
        </GInfoText>
        <GInfoText>
          Don't have an account?<Link to={"/signUp"}> Sign Up</Link>
        </GInfoText>
      </GContentSectionCard>
    </GMainScreenWrapper>
  );
}
