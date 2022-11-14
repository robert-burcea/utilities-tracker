import React from "react";
import { useData, useSetData } from "../DataContext";

const Costuri = () => {
  const data = useData();
  const setData = useSetData();
  return (
    <div className="w-full h-full max-w-[80%] bg-transparent mx-[10%] my-[5%] flex flex-col items-center rounded-xl shadow-xl">
      <div className="w-full max-w-[98%] my-2 p-2 border rounded shadow-xl flex flex-col items-center bg-gray-200 bg-opacity-60">
        <h1>GAZE</h1>
        <table className="bg-gray-300 rounded-xl p-2">
          <thead>
            <tr>
              <th className="py-3 px-1 border-b">Index Vechi</th>
              <th className="py-3 px-1 border-b">Total Consum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b text-xl text-green-800">1234</td>
              <td className="border-b text-xl text-green-800">2342 RON</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col items-center">
          <p className="m-2">Introdu index nou</p>
          <input
            type="Number"
            className="border rounded-xl text-center"
          ></input>
          <button className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">
            SALVEAZA
          </button>
        </div>
      </div>
      <div className="w-full max-w-[98%] my-2 p-2 border rounded shadow-xl flex flex-col items-center bg-gray-200 bg-opacity-60">
        <h1>CURENT</h1>
        <table className="bg-gray-300 rounded-xl p-2">
          <tr>
            <th className="py-3 px-1 border-b">Index Vechi</th>
            <th className="py-3 px-1 border-b">Total Consum</th>
          </tr>
          <tr>
            <td className="border-b text-xl text-green-800">432</td>
            <td className="border-b text-xl text-green-800">345 RON</td>
          </tr>
        </table>
        <div className="flex flex-col items-center">
          <p className="m-2">Introdu index nou</p>
          <input type="Number" className="border rounded-xl"></input>
          <button className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">
            SALVEAZA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Costuri;
