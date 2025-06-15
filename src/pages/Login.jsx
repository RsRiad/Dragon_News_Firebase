import React from 'react';
import { Link } from 'react-router';


const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted");
  };

  return (
    <div className="mt-14 flex  justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <hr className="mb-6" />
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Email address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-neutral w-full">
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{' '}
          <Link to="/auth/register" className="text-red-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
