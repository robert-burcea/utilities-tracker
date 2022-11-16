import React from "react";
import { Link, redirect } from "react-router-dom";
import { useData, useSetData } from "../DataContext";

const Unitati = () => {
  const data = useData();
  const setData = useSetData();
  return (
    <div className="w-full max-w-[80%] mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl p-2 items-center bg-gray-200 bg-opacity-60">
      <Link
        to="/unitati/diana"
        className="bg-green-200 w-full max-w-[80%] m-2 p-3 border rounded-xl shadow-xl hover:cursor-pointer flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Soba Diana</h1>
        </div>
      </Link>
      <Link
        to="/unitati/daniela"
        className="bg-green-200 w-full max-w-[80%] m-2 p-3 border rounded-xl shadow-xl hover:cursor-pointer flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Soba Daniela</h1>
        </div>
      </Link>
      <Link
        to="/unitati/robert"
        className="bg-green-200 w-full max-w-[80%] m-2 p-3 border rounded-xl shadow-xl hover:cursor-pointer flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Soba Robert</h1>
        </div>
      </Link>
      <Link
        to="/unitati/calorifer-a"
        className="bg-green-200 w-full max-w-[80%] m-2 p-3 border rounded-xl shadow-xl hover:cursor-pointer flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Calorifer 1</h1>
        </div>
      </Link>
      <Link
        to="/unitati/calorifer-b"
        className="bg-green-200 w-full max-w-[80%] m-2 p-3 border rounded-xl shadow-xl hover:cursor-pointer flex flex-col items-center"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Calorifer 2</h1>
        </div>
      </Link>
    </div>
  );
};

export default Unitati;
