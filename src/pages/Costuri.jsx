import React, { useState } from "react";
import { useData, useSetData } from "../DataContext";
import ElementTermic from "./ElementTermic";

const Costuri = () => {
  const data = useData();
  const setData = useSetData();
  const [newIndex, setNewIndex] = useState(0);

  return (
    <div className="w-full max-w-[80%] bg-transparent mx-[10%] my-[5%] flex flex-col items-center rounded-xl shadow-xl">
      <ElementTermic name="gas" />
      <ElementTermic name="electricity" />
    </div>
  );
};

export default Costuri;
