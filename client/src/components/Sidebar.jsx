import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-full min-h-screen p-2 flex flex-col gap-2 font-semibold text-lg z-0">
            <div className="flex items-center gap-2 cursor-pointer">
                <NavLink to="/" className={({ isActive }) =>
                    `w-56 flex items-center gap-5 p-2 px-4 rounded-md transition ${isActive ? "bg-gray-200" : "hover:bg-gray-200"
                    }`
                }>
                    <MdOutlineDashboard /> <h1>Dashboard</h1>
                </NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <NavLink to="/Planner" className={({ isActive }) =>
                    `w-56 flex items-center gap-5 p-2 px-4 rounded-md transition ${isActive ? "bg-gray-200" : "hover:bg-gray-200"
                    }`
                }>
                <IoCalendarClearOutline className="font-light" /> <h1>Planner</h1>
                </NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <NavLink to="/goals" className={({ isActive }) =>
                    `w-56 flex items-center gap-5 p-2 px-4 rounded-md transition ${isActive ? "bg-gray-200" : "hover:bg-gray-200"
                    }`
                }>
                    <GoGoal /> <h1>Goals</h1>
                </NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
                <NavLink to="/daily" className={({ isActive }) =>
                    `w-56 flex items-center gap-5 p-2 px-4 rounded-md transition ${isActive ? "bg-gray-200" : "hover:bg-gray-200"
                    }`
                }>
                <IoBookOutline /> <h1>Daily View</h1>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
