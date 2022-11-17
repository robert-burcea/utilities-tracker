import React from "react";
import { Link, useParams } from "react-router-dom";
import { useData, useSetData } from "../DataContext";
import ElementTermic from "./ElementTermic";

const Unitate = () => {
  const { nume } = useParams();
  const data = useData();
  const setData = useSetData();

  return (
    <div className="w-full max-w-[60%] mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl p-2 items-center bg-gray-200 bg-opacity-60">
      <div className="w-full max-w-[80%] bg-gray-100 mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl bg-opacity-60 justify-center items-center">
        {nume === "gaze" ? (
          <ElementTermic name="gas" />
        ) : (
          <ElementTermic name="electricity" />
        )}
      </div>
    </div>
  );
};

export default Unitate;
