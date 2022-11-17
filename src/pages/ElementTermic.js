import React, {useState} from 'react'
import { useData, useSetData } from "../DataContext";
import db from '../firebase'
import { 
  collection, onSnapshot, doc, setDoc
} from 'firebase/firestore'

const ElementTermic = ({name}) => {
    const info = useData();
    const setInfo = useSetData();
    const [newIndex, setNewIndex] = useState(0);
    const data = name === 'gas' ? info.gas : info.electricity;

  /*setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  }).then(console.log("Doc set!")) */


    const setIndex = (e) => {
        setNewIndex(e.target.value)
    }
    const calculateConsumption = (data) => {
        const indexUnits = data.oldIndex - data.initialIndex;
        const totalCost = indexUnits * data.pricePerIndexUnit;
        return Math.floor(totalCost);
    }
    const resetAfterIndexInput = (data) => {
      let newData = data;
      newData.oldIndex = Number(newIndex);
      newData.date = new Date();
      newData.totalCost = Math.floor(Number(calculateConsumption(data)));
      return newData;
    }
    const createBill = (type) => {
          let bill = {
            type: type,
            totalCost: (newIndex - data.initialIndex)*data.pricePerIndexUnit,
            date: new Date()
          }
          let newData = data;
          newData.bills.push(bill);
          newData.initialIndex = newIndex;
          newData.oldIndex = 0;
          newData.totalCost = 0;
          return newData;
      }
    const submitData = (type) => {
        if((new Date().getDate()) === data.dayForReset || type === 'Regularizare')
        {
          var newData = createBill(type);
          if(name === 'gas')
            setInfo({...info, gas: newData})
          else  
            setInfo({...info, electricity: newData})
        }
        else if (name === 'gas') {
          setInfo({...info, gas: resetAfterIndexInput(data)})
        }
        else {
          setInfo({...info, electricity: resetAfterIndexInput(data)})
        }
        // Add a new document in collection "cities"
        setDoc(doc(db, "utilities", "data"), {
          electricity: info.electricity,
          gas: info.gas
        }).then(console.log("Doc set!"))
    }

  return (
    <div className="w-full max-w-[98%] my-2 p-2 border rounded shadow-xl flex flex-col items-center bg-gray-200 bg-opacity-60">
        <h1>{data?.name}</h1>
        <table className="bg-gray-300 rounded-xl p-2 m-1">
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
                {data?.initialIndex}
              </td>
              <td className="border-b text-xl text-green-800">
                {data?.oldIndex}
              </td>
              <td className="border-b text-xl text-green-800">
                {data?.totalCost} RON
              </td>
            </tr>
          </tbody>
        </table>
        <table className="bg-gray-300 rounded-xl p-2 m-1">
          <thead>
            <tr>
              <th className="py-3 px-1 border-b">Ultima Factura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b text-xl text-green-800 flex justify-center">
                {data?.bills?.length > 0 ? <p className="px-1">{data?.bills[data?.bills.length-1]?.totalCost}</p> : <p className="px-1">0</p>} RON
              </td>
            </tr>
          </tbody>
        </table>
        <span className="flex flex-col items-center"></span>
        <div className="flex flex-col items-center">
          <p className="m-2 font-bold">Introdu index nou</p>
          <input
          onChange={setIndex}
            type="number"
            className="border rounded-xl text-center"
          ></input>
          <button className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]" onClick={() => submitData('Online')}>
            SALVEAZA
          </button>
        </div>
        <div className="flex flex-col items-center">
          <p className="m-2 font-bold">INDEX REGULARIZARE:</p>
          <input
          onChange={setIndex}
            type="number"
            className="border rounded-xl text-center"
          ></input>
          <button className="text-xl shadow-xl rounded bg-orange-300 p-2 m-2 hover:scale-[125%]" onClick={() => submitData('Regularizare')}>
            REGULARIZARE
          </button>
        </div>
      </div>
  )
}

export default ElementTermic