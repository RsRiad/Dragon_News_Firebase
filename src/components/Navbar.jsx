import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {

  const {user}=use(AuthContext);
  //console.log(user.email);
  return (
    <div className="flex justify-between items-center">
      <div className="">
        {
          user && <p className="text-red-600 font-bold">{user.email}</p>
        }
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        <Link to={"/auth/login"}><button className="btn btn-primary px-10 ">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
