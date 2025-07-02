"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserCircle } from "lucide-react";

// Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: yup
    .string()
    .matches(/^0\d{9,}$/, "Mobile must start with 0 and be at least 10 digits")
    .required("Mobile is required"),
});

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      email: "hellojio@gmail.com",
      mobile: "0258855585",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated profile:", data);
    setIsEditing(false);
  };

  const onCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">

        {/* Profile Icon */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-blue-600">
            <UserCircle
              size={120}
              strokeWidth={1.5}
              className="rounded-full border shadow"
            />
            <p className="text-sm text-gray-500">Profile</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              User Profile
            </h2>
            <button
              type="button"
              onClick={() => setIsEditing((prev) => !prev)}
              className="text-sm text-blue-600 hover:underline"
            >
              {isEditing ? "View" : "Edit"}
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value="Hello"
                  disabled
                  className="w-full px-3 py-2 border bg-gray-100 text-gray-600 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value="Jio"
                  disabled
                  className="w-full px-3 py-2 border bg-gray-100 text-gray-600 rounded-md text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                disabled={!isEditing}
                {...register("email")}
                className={`w-full px-3 py-2 border rounded-md text-sm ${
                  isEditing
                    ? "focus:outline-blue-500"
                    : "bg-gray-100 text-gray-600"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Country Code and Mobile */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Country Code
                </label>
                <input
                  type="text"
                  value="+44"
                  disabled
                  className="w-full px-3 py-2 border bg-gray-100 text-gray-600 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Mobile
                </label>
                <input
                  type="tel"
                  disabled={!isEditing}
                  {...register("mobile")}
                  className={`w-full px-3 py-2 border rounded-md text-sm ${
                    isEditing
                      ? "focus:outline-blue-500"
                      : "bg-gray-100 text-gray-600"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            {isEditing && (
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  Save
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
