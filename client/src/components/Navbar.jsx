import logo from "/logo.png";
import { useNavigate } from "react-router-dom";
import { API_PATHS } from "../utils/apiPaths";
import api from "../utils/axios";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await api.post(API_PATHS.AUTH.LOGOUT, {}, { withCredentials: true });
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 z-10 bg-blue-100">
      <img
        src={logo}
        alt="GoalNest"
        className="cursor-pointer h-9 m-1 rounded-xl"
        onClick={() => navigate("/")}
      />
      <h1 className="text-4xl font-bold absolute left-1/2 transform -translate-x-1/2">
        <span className="text-blue-900">Goal</span>Nest
      </h1>
      <div className="flex items-center gap-4 ">
      <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 shadow-md" onClick={logout}>
        Logout
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
