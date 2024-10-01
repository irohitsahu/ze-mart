import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  GButton,
  GContentSectionCard,
  GInfoText,
  GMainScreenWrapper,
  GTitleTextBig,
} from "../../components/GlobalStyledComponents/GlobalStyledComponents";
import { useEffect, useRef, useState } from "react";

export default function ResetPassword() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value.length === 1 && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      setResendTimer(60);
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
        <GTitleTextBig>Reset your Password!</GTitleTextBig>
        <GInfoText>
          We need your Phone number so we can send you the password reset code.
        </GInfoText>

        <div className="flex justify-center space-x-4 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 bg-gray-800 rounded-lg text-center text-2xl font-bold"
            />
          ))}
        </div>

        <GButton>Send Code</GButton>
        <p className="text-gray-400 flex justify-center items-center gap-3 w-full">
          Didn't get the code?{" "}
          <button
            onClick={handleResend}
            className={`text-white w-fit p-0 ${
              resendTimer > 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={resendTimer > 0}
          >
            Resend
            {resendTimer > 0
              ? `(0:${resendTimer.toString().padStart(2, "0")})`
              : null}
          </button>
        </p>
      </GContentSectionCard>
    </GMainScreenWrapper>
  );
}
