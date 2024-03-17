import React from "react";
import Header from "./Header";
import NotesCard from "./NotesCard";
import NotesContainer from "./NotesContainer";

const HomeContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-6 max-h-screen items-center">
        <div className="flex flex-col  w-[260px] bg-[#0085A8] py-6 px-5 mt-10 text-white gap-3 rounded-md">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Title"
              className="text-white text-lg bg-[#0085A8] outline-none font-semibold"
            />
            <textarea
              className="resize-none bg-[#0085A8] outline-none"
              // name=""
              id=""
              cols="20"
              rows="3"
              placeholder="Enter Notes here ..."
            ></textarea>
          </div>
          <button className="self-end bg-white text-green-600 rounded-full cursor-pointer">
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
      <NotesContainer />
    </>
  );
};

export default HomeContainer;
