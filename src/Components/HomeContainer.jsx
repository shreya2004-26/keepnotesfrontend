import React, { useState } from "react";
import Header from "./Header";
import NotesCard from "./NotesCard";
import NotesContainer from "./NotesContainer";
import axios from "axios";
import { toast } from "react-toastify";

const HomeContainer = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [apiData, setApiData] = useState(null);

  const handleClick = async () => {
    // console.log(formData);
    const res = await axios.post("http://localhost:8000/api/notes/", {
      email: localStorage.getItem("email"),
      ...formData,
    });
    console.log(res);
    // console.log(formData);
    if (res.data.success) {
      // console.log(res.data.success);
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setApiData(res.data.data.success);
      setFormData({ title: "", description: "" });
    } else {
      toast.error(res.data.message, {
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
      <div className="flex flex-col gap-6 max-h-screen items-center">
        <div className="flex flex-col  w-[260px] bg-[#0085A8] py-6 px-5 mt-10 text-white gap-3 rounded-md">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Title"
              className="text-white text-lg bg-[#0085A8] outline-none font-semibold"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <textarea
              className="resize-none bg-[#0085A8] outline-none"
              // name=""
              id=""
              cols="20"
              rows="3"
              placeholder="Enter Notes here ..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
          </div>
          <button
            onClick={handleClick}
            className="self-end bg-white text-green-600 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 place-items-end"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <NotesContainer apiData={apiData} setApiData={setApiData} />
    </>
  );
};

export default HomeContainer;
