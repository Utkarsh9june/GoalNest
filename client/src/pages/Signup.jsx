import React, { useState } from "react";
import { API_PATHS } from "../utils/apiPaths";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post(API_PATHS.AUTH.REGISTER, form, {
        withCredentials: true,
      });

      setMessage(res.data.message);

      setTimeout(() => {
        navigate("/");
      }, 500);
      clearForm();
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setForm({ name: "", email: "", password: "" });
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border rounded-lg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="p-2 border rounded-lg"
          required
        />
        <div className="flex justify-between items-center mt-4">
          <div>
            {message && (
              <h3 className="text-green-600 font-medium mb-4">{message}</h3>
            )}
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              {loading ? "Signing up..." : "Signup"}
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="bg-gray-300 text-black p-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
