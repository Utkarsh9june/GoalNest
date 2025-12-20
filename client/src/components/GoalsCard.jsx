import React, { useState, useRef, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegCalendarAlt, FaChevronRight } from "react-icons/fa";
import api from "../utils/axios";

const STATUS_OPTIONS = ["Not-Started", "In-Progress", "Completed", "Overdue"];

const GoalsCard = ({ goalId, title, description, category, status, due }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [statusMenuOpen, setStatusMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
        setStatusMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In-Progress":
        return "bg-blue-500";
      case "Not-Started":
        return "bg-red-500";
      case "Overdue":
        return "bg-orange-500";
      default:
        return "bg-gray-400";
    }
  };

  const updateGoalStatus = async (newStatus) => {
    try {
      await api.patch(`/goals/${goalId}/changeStatus`, {status: newStatus}, {
      withCredentials: true
    });
    } catch(err) {
      console.error("Failed to Update Status", err);
    }
  }

  const deleteGoal = async () => {
    try{
      await api.delete(`/goals/${goalId}/deleteGoal`, {
        withCredentials: true
      });
      window.location.reload();
    } catch(err) {
      console.error("Failed to delete goal", err);
    }
  }

  const remainingStatuses = STATUS_OPTIONS.filter((s) => s !== status);

  return (
    <div className="border w-[250px] rounded-xl shadow-sm p-4 relative overflow-visible">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm px-2 py-1 rounded-lg bg-gray-200 text-gray-700 font-medium">
          {category}
        </span>

        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <SlOptionsVertical />
        </button>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-2 top-12 w-44 bg-white border rounded-lg shadow-lg z-50"
        >
          {/* Change Status */}
          <div
            className="flex justify-between items-center px-3 py-2 hover:bg-gray-100 cursor-pointer relative"
            onClick={() => setStatusMenuOpen((prev) => !prev)}
          >
            <span>Change Status</span>
            <FaChevronRight className="text-xs" />

            {/* Nested Dropdown */}
            {statusMenuOpen && (
              <div
                className="
                  absolute top-0 left-full ml-2
                  w-40 bg-white border rounded-lg shadow-lg
                "
              >
                {remainingStatuses.map((s) => (
                  <div
                    key={s}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => {
                      updateGoalStatus(s);
                      setMenuOpen(false);
                      setStatusMenuOpen(false);
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Edit */}
          <div
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              console.log("Edit clicked");
              setMenuOpen(false);
            }}
          >
            Edit
          </div>

          {/* Delete */}
          <div
            className="px-3 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
            onClick={() => {
              deleteGoal();
              setMenuOpen(false);
            }}
          >
            Delete
          </div>
        </div>
      )}

      {/* Content */}
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 break-words">{description}</p>

      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <span className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
        {status}
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <FaRegCalendarAlt />
        Due: {due.split("T")[0]}
      </div>
    </div>
  );
};

export default GoalsCard;
