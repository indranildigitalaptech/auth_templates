"use client";

import { useRef, useState } from "react";
import { toast } from "react-hot-toast";

const OtpVerification = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      setError("Please enter all 6 digits");
    } else {
      setError("");
      console.log("OTP Submitted:", fullOtp);
      toast.success("OTP Verified Successfully!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">OTP Verification</h1>

        {error && <p className="text-red-500 my-2 text-sm">{error}</p>}

        <p className="text-sm text-gray-600 mb-4">
          One Time Password (OTP) has been sent via Email to
          <span className="block font-medium text-gray-800">example@gmail.com</span>
        </p>

        <p className="mb-3 text-sm">Enter the OTP below to verify it.</p>

        {/* OTP Inputs */}
        <div className="grid grid-cols-6 gap-2 justify-center mb-5">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-10 h-10 md:w-12 md:h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              ref={(el) => (inputsRef.current[i] = el!)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              value={otp[i]}
            />
          ))}
        </div>

        <div className="flex justify-end mb-4">
          <button className="text-sm text-blue-600 hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ">
            Resend OTP
          </button>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={otp.join("").length < 6}
          className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;