import React from "react";
import logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center text-center justify-between px-4 py-2 z-10 bg-blue-100">
      <img
        src={logo}
        alt="GoalNest"
        className="cursor-pointer h-9 m-1 rounded-xl"
        onClick={() => navigate("/")}
      />
      <h1 className="text-4xl font-bold pl-52">
        <span className="text-blue-900">Goal</span>Nest
      </h1>
      <div className="flex items-center gap-4 ">
      <input className="border border-gray-300 rounded-md px-2 py-1 w-64 "
        type="text" 
        placeholder="Search Here"/>
      <FaRegUserCircle 
      className="text-4xl cursor-pointer text-gray-600" 
      onClick={() => navigate("/profile")}
      />
      </div>
    </nav>
  );
};

export default Navbar;
