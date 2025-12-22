import React, { useState } from "react";
import Planner from "./Planner";
import Goals from "./Goals";
import Study from "/Study.png";
import SuccessImage from "/SuccessImage.png";
import InspirationCard from "../components/InspirationCard";
import Productivity from "./Productivity";
import UpcomingTask from "./UpcomingTask";

const Dashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <h1 className="text-3xl font-bold">Welcome Back, Utkarsh!</h1>
      <p className="mt-4 text-lg">Here's your personalized overview.</p>

      <Productivity />

      <UpcomingTask />      

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
