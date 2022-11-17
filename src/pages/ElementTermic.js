import React, {useState} from 'react'
import { useData, useSetData } from "../DataContext";

const ElementTermic = ({name}) => {
    const info = useData();
    const setInfo = useSetData();
    const [newIndex, setNewIndex] = useState(0);
    const data = name === 'gas' ? info.gas : info.electricity;

    const setIndex = (e) => {
        setNewIndex(e.target.value)
    }
    const calculateConsumption = (data) => {
        const indexUnits = data.oldIndex - data.initialIndex;
        const totalCost = indexUnits * data.pricePerIndexUnit;
        return Math.floor(totalCost);
    }
    const reset = (data) => {
        if((new Date().getDate()) === data.dayForReset)
          console.log("TBC")
      }
    const submitData = () => {
        if(name === 'gas') {
            let newGas = info.gas;
            newGas.oldIndex = newIndex;
            newGas.date = new Date();
            newGas.totalCost = calculateConsumption(newGas);
            setInfo({...info, gas: newGas})
        }
        else {
            let newElectricity = info.electricity;
            newElectricity.oldIndex = newIndex;
            newElectricity.date = new Date();
            newElectricity.totalCost = calculateConsumption(newElectricity);
            setInfo({...info, electricity: newElectricity})
        }
    }

  return (
    <div className="w-full max-w-[98%] my-2 p-2 border rounded shadow-xl flex flex-col items-center bg-gray-200 bg-opacity-60">
        <h1>{data.name}</h1>
        <table className="bg-gray-300 rounded-xl p-2">
          <thead>
            <tr>
              <th className="py-3 px-1 border-b">Index Initial</th>
              <th className="py-3 px-1 border-b">Ultimul Index</th>
              <th className="py-3 px-1 border-b">Total Consum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b text-xl text-green-800">
                {data.initialIndex}
              </td>
              <td className="border-b text-xl text-green-800">
                {data.oldIndex}
              </td>
              <td className="border-b text-xl text-green-800">
                {data.totalCost} RON
              </td>
            </tr>
          </tbody>
        </table>
        <p>Ultimul index introdus la {JSON.stringify(new Date(data.date).toLocaleDateString())}</p>
        <div className="flex flex-col items-center">
          <p className="m-2">Introdu index nou</p>
          <input
          onChange={setIndex}
            type="Number"
            className="border rounded-xl text-center"
          ></input>
          <button className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]" onClick={submitData}>
            SALVEAZA
          </button>
        </div>
      </div>
  )
}

export default ElementTermic