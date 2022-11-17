import React from "react";
import { useData, useSetData } from "../DataContext";
import { Link, redirect } from "react-router-dom";
import Costuri from "./Costuri";

const Home = () => {
  const data = useData();
  const setData = useSetData();

  return (
    <div className="w-full max-w-[80%] bg-gray-100 mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl bg-opacity-60 justify-center items-center">
      <h1 className="">Tracker Energie</h1>
      {data ? (
        <div className="m-2 p-2 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl">GAZE: </h1>
            <p className="text-green-800 font-bold text-2xl">
              {data?.gas?.totalCost} RON
            </p>
            <p className="">
              Ultimul index introdus la{" "}
              {JSON.stringify(
                new Date(data?.gas?.date.toDate()).toLocaleDateString()
              )}
            </p>
          </div>
          <div className="m-2 p-2 flex flex-col items-center">
            <h1 className="font-bold text-xl">CURENT:</h1>
            <p className="text-green-800 font-bold text-2xl">
              {data?.electricity?.totalCost} RON
            </p>
            <p className="">
              Ultimul index introdus la{" "}
              {JSON.stringify(
                new Date(data?.electricity?.date?.toDate()).toLocaleDateString()
              )}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl">TOTAL:</h1>
            <p className="text-green-800 font-bold text-2xl">
              {data?.gas?.totalCost + data?.electricity?.totalCost} RON
            </p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
