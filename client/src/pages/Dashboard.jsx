import React, { useState } from "react";
import ProgressCard from "../components/ProgressCard";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuCalendarCheck } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { LuTimer } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Planner from "./Planner";
import Goals from "./Goals";
import Study from "/Study.png";
import SuccessImage from "/SuccessImage.png";
import InspirationCard from "../components/InspirationCard";

const Dashboard = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  }

  const [timeline, setTimeline] = useState("daily");
  const progressData = {
    daily: [
      { name: "Mon", value: Number("3") },
      { name: "Tue", value: Number("4") },
      { name: "Wed", value: Number("2") },
      { name: "Thu", value: Number("5") },
      { name: "Fri", value: Number("6") },
    ],
    sprint: [
      { name: "Week 1", value: 12 },
      { name: "Week 2", value: 15 },
      { name: "Week 3", value: 10 },
      { name: "Week 4", value: 14 },
    ],
    monthly: [
      { name: "Jan", value: 50 },
      { name: "Feb", value: 60 },
      { name: "Mar", value: 40 },
      { name: "Apr", value: 70 },
    ],
    quarterly: [
      { name: "Q1", value: 150 },
      { name: "Q2", value: 180 },
      { name: "Q3", value: 160 },
      { name: "Q4", value: 200 },
    ],
  };

  return (
    <div>
      {/* Header Section */}
      <h1 className="text-3xl font-bold">Welcome Back, Utkarsh!</h1>
      <p className="mt-4 text-lg">Here's your personalized overview.</p>

      {/* Progress Cards Section */}
      <div className="grid grid-cols-2 mt-3 w-full gap-8">
        <ProgressCard
          icon={FaBullseye}
          title="Quarterly Goals"
          description="Track your progress towards your quarterly goals."
          current={3}
          total={5}
          statusicon={SiTicktick}
          statusText="Completed"
          statusColor="#22c55e"
          onViewDetails={() => scrollToSection("quarterly")}
        />
        <ProgressCard
          icon={IoBookOutline}
          title="Monthly Goals"
          description="Track your progress towards your monthly goals."
          current={3}
          total={5}
          statusicon={GrInProgress}
          statusText="In Progress"
          statusColor="#d4c706"
          onViewDetails={() => scrollToSection("monthly")}
        />
        <ProgressCard
          icon={FaRegCalendarAlt}
          title="Weekly Goals"
          description="Track your progress towards your quarterly goals."
          current={3}
          total={5}
          statusicon={LuTimer}
          statusText="Overdue"
          statusColor="#ff0000"
          onViewDetails={() => scrollToSection("weekly")}
        />
        <ProgressCard
          icon={FaListCheck}
          title="Daily Goals"
          description="Track your progress towards your quarterly goals."
          current={3}
          total={5}
          statusicon={SiTicktick}
          statusText="Completed"
          statusColor="#22c55e"
          onViewDetails={() => scrollToSection("daily")}
        />
      </div>

      {/* Quick Productivity Stats Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border mt-10">
        <h3 className="text-2xl font-bold mb-4">Quick Productivity Stats</h3>
        <div className="grid grid-cols-5 gap-4 text-center">
          {/* Tasks Completed */}
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">85%</p>
            <p className="text-sm text-gray-600">Tasks Completed</p>
            <p className="text-xs text-gray-500 mt-1">This Week</p>
          </div>

          {/* Goals Achieved */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">Goals Achieved</p>
            <p className="text-xs text-gray-500 mt-1">This Month</p>
          </div>

          {/* Longest Streak */}
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-2xl font-bold text-yellow-600">7 Days</p>
            <p className="text-sm text-gray-600">Longest Streak</p>
            <p className="text-xs text-gray-500 mt-1">Daily Completion</p>
          </div>

          {/* Avg. Daily Tasks */}
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">6</p>
            <p className="text-sm text-gray-600">Avg. Daily Tasks</p>
            <p className="text-xs text-gray-500 mt-1">Last 30 Days</p>
          </div>

          {/* Completion Rate */}
          <div className="p-4 bg-pink-50 rounded-lg">
            <p className="text-2xl font-bold text-pink-600">92%</p>
            <p className="text-sm text-gray-600">Completion Rate</p>
            <p className="text-xs text-gray-500 mt-1">Of All Planned Tasks</p>
          </div>
        </div>
      </div>

      {/* Upcoming and Overdue Tasks Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border mt-10">
        <h3 className="text-2xl font-bold mb-4">Upcoming & Overdue Tasks</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Task</th>
              <th className="pb-2">Due Date</th>
              <th className="pb-2">Priority</th>
              <th className="pb-2">Category</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <AiOutlineExclamationCircle /> Finalize Q3 Report{" "}
                </div>
              </td>
              <td className="py-2 text-red-500 font-semibold">Sep 30</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-600">
                  High
                </span>
              </td>
              <td className="py-2">Work</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-red-200 text-red-700">
                  Overdue
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <LuCalendarCheck /> Plan October Content
                </div>
              </td>
              <td className="py-2">Oct 5</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-600">
                  Medium
                </span>
              </td>
              <td className="py-2">Work</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
                  In Progress
                </span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <LuCalendarCheck /> Review Monthly Budget
                </div>
              </td>
              <td className="py-2">Oct 10</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                  Low
                </span>
              </td>
              <td className="py-2">Finance</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                  Pending
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-2">
                <div className="flex items-center gap-1">
                  <LuCalendarCheck /> Schedule Team Standup
                </div>
              </td>
              <td className="py-2">Oct 12</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">
                  Low
                </span>
              </td>
              <td className="py-2">Work</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-600">
                  Upcoming
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Progress Graph section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border mt-10">
        <h2 className="text-2xl font-bold mb-4">Past Progress</h2>
        <div className="flex gap-4 mb-4 flex justify-end">
          {["daily", "Weekly", "monthly", "quarterly"].map((t) => (
            <button
              key={t}
              onClick={() => setTimeline(t)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                timeline === t
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={progressData[timeline]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <InspirationCard
        title="Plan Your Ascend"
        quote="Define your aspiration, break them into manageable steps, and track your journey to success. Every great achievement start with a clear plan.."
        image={Study}
      />
      <Planner />
      <InspirationCard 
        title="Dream, Plan, Achieve"
        quote="Your future is created by what you do today, not tomorrow. Set your goals, stay consistent, and success will follow."
        image={SuccessImage}
      />
      <Goals />
    </div>
  );
};

export default Dashboard;
