import React from "react";
import { Link, useParams } from "react-router-dom";

const Unitate = () => {
  const { nume } = useParams();

  return (
    <div className="w-full h-full max-w-[80%] bg-green-200 mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl p-2 items-center">
      {nume}
    </div>
  );
};

export default Unitate;
