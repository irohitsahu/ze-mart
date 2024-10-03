import { useState } from "react";
import { ChevronLeft, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../service/authApi";
import {
  GButton,
  GContentSectionCard,
  GInfoText,
  GInput,
  GMainScreenWrapper,
  GTitleTextBig,
} from "../../../components/GlobalStyledComponents/GlobalStyledComponents";
import { setUserAuth } from "../../../store/slice/authSlice";
import { setRefreshToken } from "../../../util/cookies";
import { useDispatch } from "react-redux";

export default function LoginContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { accessToken, refreshToken } = await login({
        username,
        password,
      }).unwrap();
      dispatch(setUserAuth({ accessToken, username }));
      setRefreshToken(refreshToken);

      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

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

        <form onSubmit={handleLogin}>
          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <GInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative w-full">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <GInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 text-gray-400 h-full w-10 p-0"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {error && "data" in error && (
            <p className="text-red-500 text-sm mt-2">
              {(error.data as { message: string }).message ||
                "An error occurred during login"}
            </p>
          )}

          <GButton type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </GButton>
        </form>

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
