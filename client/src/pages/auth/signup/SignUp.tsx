import { useState } from "react";
import { ChevronLeft, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../../service/authApi";
import {
  GButton,
  GContentSectionCard,
  GInfoText,
  GInput,
  GMainScreenWrapper,
  GTitleTextBig,
} from "../../../components/GlobalStyledComponents/GlobalStyledComponents";

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await signup({ username, email, password }).unwrap();
      const { accessToken, refreshToken } = result;

      // Store tokens in localStorage (consider using a more secure method in production)
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // Redirect to home page or dashboard
      navigate("/home");
    } catch (err) {
      if (err && typeof err === "object" && "data" in err) {
        setError(
          (err.data as { message: string }).message ||
            "An error occurred during signup"
        );
      } else {
        setError("An unexpected error occurred");
      }
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
        <GTitleTextBig>Get Started!</GTitleTextBig>
        <GInfoText>Enter your details below</GInfoText>

        <form onSubmit={handleSignup}>
          <div className="relative w-full">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <GInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="relative w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <GInput
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="relative w-full">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <GInput
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-0 text-gray-400 h-full w-10 p-0"
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <GButton type="submit" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
          </GButton>
        </form>

        <div className="flex items-center mb-6 w-full">
          <div className="flex-grow h-px bg-gray-100"></div>
          <span className="px-4 text-gray-400">Or continue with</span>
          <div className="flex-grow h-px bg-gray-100"></div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="flex-1 py-3 rounded-lg bg-gray-800 flex items-center justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </button>
          <button className="flex-1 py-3 rounded-lg bg-gray-800 flex items-center justify-center">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </button>
        </div>

        <GInfoText>
          Already have an account? <Link to={"/login"}>Login</Link>
        </GInfoText>
      </GContentSectionCard>
    </GMainScreenWrapper>
  );
};

export default SignUpScreen;
