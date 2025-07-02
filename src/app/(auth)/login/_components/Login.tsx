"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("Login Data", data);
    toast.success("Login successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-right text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Image
                src={
                  passwordVisible ? "/assets/visible.png" : "/assets/hide.png"
                }
                onClick={() => setPasswordVisible(!passwordVisible)}
                alt="Show Password"
                width={24}
                height={24}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            </div>
            {errors.password && (
              <p className="text-right text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!isValid}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-right mt-4">
          <button
            className="text-sm text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              router.push("/forgot-password");
            }}
          >
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
