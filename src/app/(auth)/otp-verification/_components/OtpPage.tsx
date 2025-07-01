"use client";

import React, { useRef } from "react";

const OtpVerification = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    // Only accept digits
    if (!/^\d?$/.test(value)) return;

    e.target.value = value;

    // Move to next input if value exists
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-2">OTP Verification</h1>
        <p className="text-sm text-gray-600 mb-6">
          One Time Password (OTP) has been sent via Email to{" "}
          <span className="font-medium text-gray-800">example@gmail.com</span>
        </p>

        <p className="mb-3 text-sm">Enter the OTP below to verify it.</p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-5">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              ref={(el) => (inputsRef.current[i] = el!)}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>

        <div className="flex justify-end mb-6">
          <button className="text-sm text-blue-600 hover:underline">
            Resend OTP
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
