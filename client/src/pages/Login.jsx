import React, { useState } from "react";
import { API_PATHS } from "../utils/apiPaths";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post(API_PATHS.AUTH.LOGIN, form, {
        withCredentials: true
      });

      setMessage(res.data.message || "Login Successful");

      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setForm({ email: "", password: "" });
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 border rounded-lg shadow-lg bg-white">
      <div className="flex items-center justify-center gap-3 mb-8">
        <img src="/logo.png" alt="GoalNest Logo" className="w-12 h-12" />
        <h1 className="text-3xl font-bold text-blue-600">GoalNest</h1>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>

      {message && <h3 className="text-green-600 font-medium mb-4 text-center">{message}</h3>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-medium mt-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      
      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-500 hover:underline cursor-pointer font-medium"
        >
          Sign up here
        </span>
      </p>
    </div>
  );
};

export default Login;
