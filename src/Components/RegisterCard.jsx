import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const RegisterCard = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [apiData, setApiData] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:8000/api/register", {
      email: localStorage.getItem("email"),
      ...formData,
    });
    console.log(res.data);
    const { success, message } = res.data;
    if (success) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setformData({ name: "", email: "", password: "" });
      navigate("/login");
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#0085A8] min-h-screen">
        <div className="flex flex-col gap-3 mt-4 bg-white w-[300px] text-gray-700 py-10 px-6 shadow-md">
          <h1 className="font-semibold text-2xl text-gray-600 self-center">
            Register
          </h1>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex flex-row gap-2 items-center border-gray-600 border-[1px] px-2 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <input
                className="outline-none"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => {
                  setformData({ ...formData, name: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-row gap-2 items-center border-gray-600 border-[1px] px-2 py-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                />
              </svg>

              <input
                className="outline-none"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-row gap-2 items-center border-gray-600 border-[1px] px-2 py-1 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <input
                className="outline-none"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => {
                  setformData({ ...formData, password: e.target.value });
                }}
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="font-semibold text-lg bg-[#0085A8] py-1 mt-5 text-white"
          >
            Register
          </button>
          <h1 className="text-sm font-semibold">
            Already a member?
            <Link to="/login" className="text-[#0085A8] text-sm cursor-pointer">
              {" "}
              Login Now
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default RegisterCard;
