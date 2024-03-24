import React, { useEffect } from "react";
import NotesCard from "./NotesCard";
import axios from "axios";

const NotesContainer = ({ apiData, setApiData }) => {
  const getAllNotes = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/notes/?email=${localStorage.getItem("email")}`
    );
    setApiData(res.data.data);
    // console.log(res.data.data);
  };

  useEffect(() => {
    getAllNotes();
  }, [apiData]);
  return (
    <>
      <div className="grid grid-cols-4 items-center ml-12 mt-9">
        {apiData?.map((curr, index) => {
          return (
            <NotesCard
              key={index}
              title={curr.title}
              description={curr.description}
              id={curr._id}
              apiData={apiData}
              setApiData={setApiData}
            />
          );
        })}
      </div>
    </>
  );
};

export default NotesContainer;
