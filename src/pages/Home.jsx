import React from "react";
import { useData, useSetData } from "../DataContext";

const Home = () => {
  const data = useData();
  const setData = useSetData();
  return (
    <div className="w-full max-w-[80%] bg-gray-100 mx-[10%] my-[5%] flex rounded-xl shadow-xl bg-opacity-60 justify-center">
      <h1 className="">Tracker Energie</h1>
      {console.log(data.termicElements[0].timer)}
    </div>
  );
};

export default Home;
