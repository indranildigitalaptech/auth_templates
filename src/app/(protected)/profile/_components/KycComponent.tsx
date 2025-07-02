"use client";

import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";

const KycComponent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    dob: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("KYC Submitted:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      dob: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      postalCode: "",
    });
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

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing
                    ? "focus:outline-blue-500"
                    : "bg-gray-100 text-gray-600"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Address Line 1</label>
              <textarea
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                disabled={!isEditing}
                rows={2}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing
                    ? "focus:outline-blue-500"
                    : "bg-gray-100 text-gray-600"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Address Line 2</label>
              <textarea
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                disabled={!isEditing}
                rows={2}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing
                    ? "focus:outline-blue-500"
                    : "bg-gray-100 text-gray-600"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    isEditing
                      ? "focus:outline-blue-500"
                      : "bg-gray-100 text-gray-600"
                  }`}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border rounded text-sm ${
                    isEditing
                      ? "focus:outline-blue-500"
                      : "bg-gray-100 text-gray-600"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded text-sm ${
                  isEditing
                    ? "focus:outline-blue-500"
                    : "bg-gray-100 text-gray-600"
                }`}
              />
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
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
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
