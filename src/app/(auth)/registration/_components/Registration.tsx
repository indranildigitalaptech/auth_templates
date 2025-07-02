"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { schema } from "./schema";
import { InputField } from "./InputFields";

const Registration = () => {
  const [countryFlag, setCountryFlag] = useState("/assets/uk_flag.png");
  const [countryName, setCountryName] = useState("UK");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const flagHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue === "UK") {
      setCountryName("UK");
      setCountryFlag("/assets/uk_flag.png");
    } else if (selectedValue === "ZIM") {
      setCountryName("ZIM");
      setCountryFlag("/assets/zim_flag.png");
    }
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted", {...data, countryName});
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Registration
        </h1>

        {/* Success or Error Message */}
        {isSubmitted && (<p className="text-green-600 text-center">Successful Submit</p>)}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <InputField
            label="First Name"
            name="fname"
            register={register}
            error={errors.fname}
            placeholder="First Name"
          />

          {/* Last Name */}
          <InputField
            label="Last Name"
            name="lname"
            register={register}
            error={errors.lname}
            placeholder="Last Name"
          />

          {/* Email */}
          <InputField
            label="Email Address"
            name="email"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country Code
                </label>
                <div className="flex items-center gap-2">
                  <div className="shrink-0">
                    <Image
                      src={countryFlag}
                      alt="Country Flag"
                      width={30}
                      height={20}
                      className="rounded object-cover"
                    />
                  </div>
                  <select
                    onChange={flagHandler}
                    defaultValue={"UK"}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="UK">
                      UK (+44)
                    </option>
                    <option value="ZIM">ZIM (+263)</option>
                  </select>
                </div>
              </div>

              {/* Mobile Number Field */}
              <div className="w-full">
                <InputField
                  label="Mobile Number"
                  name="mobile"
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
            register={register}
            error={errors.password}
            placeholder="Password"
            type="password"
          />

          {/* Confirm Password */}
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            placeholder="Confirm Password"
            type="password"
          />

          {/* Submit */}
          <button
            type="submit"
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
