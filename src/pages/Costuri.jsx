import React from "react";
import { useData, useSetData } from "../DataContext";

const Costuri = () => {
  const data = useData();
  const setData = useSetData();
  return (
    <div className="w-full h-full max-w-[80%] bg-gray-100 mx-[10%] my-[5%] flex flex-col items-center rounded-xl shadow-xl">
      <div className="my-2">
        <h1>GAZE</h1>
        <table>
          <tr>
            <th>Index Vechi</th>
            <th>Total Consum</th>
          </tr>
          <tr>
            <td>1234</td>
            <td>2342 RON</td>
          </tr>
        </table>
        <div className="flex flex-col items-center">
          <p className="m-2">Introdu index nou</p>
          <input type="Number"></input>
          <button className="text-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">
            SALVEAZA
          </button>
        </div>
      </div>
      <div className="my-2">
        <h1>CURENT</h1>
        <table>
          <tr>
            <th>Index Vechi</th>
            <th>Total Consum</th>
          </tr>
          <tr>
            <td>432</td>
            <td>345 RON</td>
          </tr>
        </table>
        <div className="flex flex-col items-center">
          <p className="m-2">Introdu index nou</p>
          <input type="Number"></input>
          <button className="text-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">
            SALVEAZA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Costuri;
