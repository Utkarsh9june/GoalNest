import React, { useState } from "react";
import { API_PATHS } from "../utils/apiPaths";
import api from "../utils/axios";
import { useNavigate } from 'react-router-dom';

const Planner = () => {
  const Navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timeline, setTimeline] = useState("");
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setTimeline("");
    setPriority("");
    setTags("");
    setMessage("");
  }

  const handleAddGoal = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      console.log(api);
      const res = await api.post(API_PATHS.GOAL.ADDGOAL, {
        title,
        description,
        timeline,
        priority,
        tags,
      }, {
        withCredentials: true
      });

      setMessage("Goal added Successfully");
      console.log(res.data);

      clearForm();
      Navigate("/");
    } catch (err) {
      console.error(err);
      setMessage("Error adding goal!");
    }

    setLoading(false);
  };
  return (
    <div>
      {/* Goals Planning Section */}
      <div className="mt-10 p-8 border rounded-lg">
        <h2 className="text-2xl font-semibold">Add a goal</h2>
        <p className="text-md mt-2">Fill the details to set your new goal</p>
        <form className="text-lg flex flex-col mt-4" onSubmit={handleAddGoal}>
          <p className="mt-4">Goal Title</p>
          <input
            type="text"
            placeholder="Enter your goal title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg mt-1"
          />
          <p className="mt-4">Description</p>
          <textarea
            placeholder="Enter your goal description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg mt-1"
          />
          <div className="flex flex-row gap-8 mt-4 justify-between w-full">
            <div className="flex flex-col w-1/2">
              <p className="flex">Due Date</p>
              <input
                type="date"
                name="Select a Timeline"
                placeholder="DD-MM-YYYY"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="border-2 border-gray-300 p-2 rounded-lg mt-1 flex bg-white"
              />
            </div>
            <div className="flex flex-col ml-4 w-1/2">
              <p className="flex">Priority</p>
              <select
                name="Select a Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border-2 border-gray-300 p-2 rounded-lg mt-1 flex bg-white"
              >
                <option value="">
                  Select a priority
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <p className="flex mt-4">Tags</p>
          <input
            type="text"
            placeholder="Enter tags separated by commas"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg mt-1"
          />
        <div className="flex justify-between items-center mt-4">
          <div>
            {message && (
              <h2 className="font-medium text-xl text-green-600">{message}</h2>
            )} 
          </div>          
          <div className="flex justify-end gap-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-4">
              {loading ? "Adding..." : "Add Goal"}
            </button>
            <button type="button" onClick={clearForm} className="bg-gray-300 text-black p-2 rounded-lg mt-4">
              Cancel
            </button>
          </div>   
        </div>
        
         
          
        </form>   
      </div>
    </div>
  );
};

export default Planner;
