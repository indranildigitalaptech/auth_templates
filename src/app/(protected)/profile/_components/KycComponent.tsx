"use client";

import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./kycSchema"; 


const KycComponent = () => {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log("KYC Submitted:", data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 md:p-6 max-w-4xl mx-auto my-2">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Icon */}
        <div className="w-full md:w-1/2 flex justify-center items-center pt-2">
          <div className="flex flex-col items-center text-blue-600">
            <ShieldCheck size={64} />
            <p className="text-sm mt-2 text-gray-600">KYC Verification</p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">KYC Details</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-blue-600 text-sm hover:underline"
            >
              {isEditing ? "View" : "Edit"}
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Date of Birth</label>
              <input
                type="date"
                {...register("dob")}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing ? "focus:outline-blue-500" : "bg-gray-100 text-gray-600"
                }`}
              />
              {errors.dob && <p className="text-xs text-red-500">{errors.dob.message}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1">Address Line 1</label>
              <textarea
                rows={2}
                {...register("address1")}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing ? "focus:outline-blue-500" : "bg-gray-100 text-gray-600"
                }`}
              />
              {errors.address1 && <p className="text-xs text-red-500">{errors.address1.message}</p>}
            </div>

            <div>
              <label className="block text-sm mb-1">Address Line 2</label>
              <textarea
                rows={2}
                {...register("address2")}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing ? "focus:outline-blue-500" : "bg-gray-100 text-gray-600"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">City</label>
                <input
                  type="text"
                  {...register("city")}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    isEditing ? "focus:outline-blue-500" : "bg-gray-100 text-gray-600"
                  }`}
                />
                {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
              </div>
              <div>
                <label className="block text-sm mb-1">Country</label>
                <input
                  type="text"
                  {...register("country")}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    isEditing ? "focus:outline-blue-500" : "bg-gray-100 text-gray-600"
                  }`}
                />
                {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Postal Code</label>
              <input
                type="text"
                {...register("postalCode")}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing ? "focus:outline-blue-500" : "bg-gray-100 text-gray-600"
                }`}
              />
              {errors.postalCode && (
                <p className="text-xs text-red-500">{errors.postalCode.message}</p>
              )}
            </div>

            {isEditing && (
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
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

export default KycComponent;
