import React from "react";
import NotesCard from "./NotesCard";

const NotesContainer = () => {
  return (
    <>
      <div className="grid grid-cols-4 items-center ml-12 mt-9">
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
    </>
  );
};

export default NotesContainer;
