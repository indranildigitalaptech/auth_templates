// Reusable Input Field Component
export const InputField = ({
  label,
  name,
  register,
  error,
  placeholder,
  type = "text",
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && (
      <p className="text-red-500 text-sm text-right">{error.message}</p>
    )}
  </div>
);
