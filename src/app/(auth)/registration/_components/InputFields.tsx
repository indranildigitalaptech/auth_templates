type InputProps = {
  label: string;
  name: string;
  register: any;
  error?: any;
  placeholder?: string;
  type?: string;
  testId?: string;
};

export const InputField = ({
  label,
  name,
  register,
  error,
  placeholder,
  type = "text",
  testId,
}: InputProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={name}
      type={type}
      {...register(name)}
      placeholder={placeholder}
      data-testid={testId}
      className="mt-1 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && (
      <p className="text-red-500 text-sm text-right">{error.message}</p>
    )}
  </div>
);
