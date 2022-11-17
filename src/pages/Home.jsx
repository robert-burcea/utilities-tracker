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
      {data ? <Costuri /> : <div>Loading...</div>}
    </div>
  );
};

export default Home;
