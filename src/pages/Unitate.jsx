import React from "react";
import { Link, useParams } from "react-router-dom";
import Daniela from "../components/Daniela";
import { useData, useSetData } from "../DataContext";

const Unitate = () => {
  const { nume } = useParams();
  const data = useData();
  const setData = useSetData();

  return (
    <div className="w-full max-w-[80%] bg-green-200 mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl p-2 items-center">
      {nume}
      <Daniela />
    </div>
  );
};

export default Unitate;
