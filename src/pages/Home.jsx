import React from "react";
import { useData, useSetData } from "../DataContext";
import { Link, redirect } from "react-router-dom";
import Costuri from "./Costuri";

const Home = () => {
  const data = useData();
  const setData = useSetData();

  const verifyRunning = () => {
    data.termicElements.map((el) => {
      console.log(el.running);
      if (el.running)
        return (
          <div className="w-full max-w-[80%] mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl p-2 items-center bg-gray-200 bg-opacity-60">
            <Link
              to="/unitati/daniela"
              className="bg-green-200 w-full max-w-[80%] m-2 p-3 border rounded-xl shadow-xl hover:cursor-pointer flex flex-col items-center"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-2xl">Soba Daniela</h1>
              </div>
            </Link>
          </div>
        );
      else return <></>;
    });
  };
  return (
    <div className="w-full max-w-[80%] bg-gray-100 mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl bg-opacity-60 justify-center items-center">
      <h1 className="">Tracker Energie</h1>
      <Costuri />
    </div>
  );
};

export default Home;
