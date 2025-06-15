import React, { use } from "react";
import { Link, Links } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const { loginUser, setUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        
        setUser(userCredential.user);
        
        alert("Login Done!");
        
      })
      .catch((error) => {
        alert(error.message);
      });
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
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button to="" type="submit" className="btn btn-neutral w-full">
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{" "}
          <Link to="/auth/register" className="text-red-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
