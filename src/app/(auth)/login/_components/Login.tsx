"use client"
import Image from 'next/image';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        
        <p className='text-center text-green-700 my-2'>Login Successful redirecting to home page...</p>
        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className='text-right text-red-500'>Invalid Email</p>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Image
                src="/assets/visible.png"
                alt="Show Password"
                width={24}
                height={24}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              />
            </div>
            <p className='text-right text-red-500'>Invalid Email</p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-right mt-4">
          <button className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
