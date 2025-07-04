"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { schema } from "./schema";
import { InputField } from "./InputFields";
import { toast } from "react-hot-toast";

const Registration = () => {
  const [countryFlag, setCountryFlag] = useState("/assets/uk_flag.png");
  const [countryName, setCountryName] = useState("UK");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const flagHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const flags: Record<string, string> = {
      UK: "/assets/uk_flag.png",
      ZIM: "/assets/zim_flag.png",
    };
    setCountryName(selected);
    setCountryFlag(flags[selected]);
  };

  const onSubmit = (data: any) => {
    const payload = { ...data, countryName };
    console.log("Form submitted", payload);
    toast.success("Registration successful!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Registration
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <InputField
            label="First Name"
            name="fname"
            testId="fname"
            register={register}
            error={errors.fname}
            placeholder="First Name"
          />

          {/* Last Name */}
          <InputField
            label="Last Name"
            name="lname"
            testId="lname"
            register={register}
            error={errors.lname}
            placeholder="Last Name"
          />

          {/* Email */}
          <InputField
            label="Email Address"
            name="email"
            testId="email"
            register={register}
            error={errors.email}
            placeholder="example@gmail.com"
            type="email"
          />

          {/* Mobile with Country Code */}
          <div>
            <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
              {/* Country Code Dropdown */}
              <div className="w-3xs sm:max-w-[200px]">
                <label
                  htmlFor="country-code"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country Code
                </label>
                <div className="flex items-center gap-2">
                  <Image
                    src={countryFlag}
                    alt="Country Flag"
                    width={30}
                    height={20}
                    className="rounded object-cover"
                  />
                  <select
                    id="country-code"
                    data-testid="country-select"
                    onChange={flagHandler}
                    defaultValue="UK"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="UK">UK (+44)</option>
                    <option value="ZIM">ZIM (+263)</option>
                  </select>
                </div>
              </div>

              {/* Mobile Number */}
              <div className="w-full">
                <InputField
                  label="Mobile Number"
                  name="mobile"
                  testId="mobile"
                  register={register}
                  error={errors.mobile}
                  placeholder="Mobile Number"
                  type="tel"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <InputField
            label="Password"
            name="password"
            testId="password"
            register={register}
            error={errors.password}
            placeholder="Password"
            type="password"
          />

          {/* Confirm Password */}
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            testId="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            placeholder="Confirm Password"
            type="password"
          />

          {/* Submit Button */}
          <button
            type="submit"
            data-testid="submit-button"
            disabled={!isValid}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
