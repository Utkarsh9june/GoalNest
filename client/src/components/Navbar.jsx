import React from "react";
import logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <img
        src={logo}
        alt="GoalNest"
        style={{ width: "40px", height: "40px", borderRadius: "50px" }}
        className="cursor-pointer"
        onClick={() => navigate("/")}
      />
      <h1 className="text-3xl font-bold">
        <span className="text-blue-900">Goal</span>Nest
      </h1>
      <FaRegUserCircle 
      className="text-4xl cursor-pointer text-gray-600" 
      onClick={() => navigate("/profile")}
      />
    </nav>
  );
};

export default Navbar;
