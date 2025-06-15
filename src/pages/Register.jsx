import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
    const {createUser,setUser}=use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e.target.name.value);
    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log({name,photo,email,password});

    createUser(email,password)
    .then(results=>{
        const user=results.user;
        //console.log(user);
        setUser(user);
    })
    .catch(error=>{
        console.log(error.message);
    })


  };

  return (
    <div className=" flex mt-3 justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Register your account
        </h2>
        <hr className="mb-6" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input
            name='name'
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Photo URL</label>
            <input
              name='photo'
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
            name='email'
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
            name='password'
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label className="text-sm">
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-neutral w-full"
            disabled={!accepted}
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already Have An Account?{" "}
          <Link to="/auth/login" className="text-red-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
