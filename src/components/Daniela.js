import React, {useState, useEffect} from 'react'
import { useData, useSetData } from "../DataContext";


const Daniela = (props) => {
    const data = useData();
    const setData = useSetData();
    const [timer, setTimer] = useState(props.timerDaniela)
    const [running, setRunning] = useState(props.runningDaniela)

    return (
      <div className="w-full max-w-[80%] bg-green-200 mx-[10%] my-[5%] flex flex-col rounded-xl shadow-xl p-2 items-center">
        <h1 className="text-2xl">Soba Daniela</h1>
        <div className="numbers text-xl shadow-xl rounded bg-green-100 p-2 m-2">
          <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={() => {props.childToParent(timer,true,0); setRunning(true)}} className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">Start</button>
          <button onClick={() => {props.childToParent(timer,false,0); setRunning(false)}} className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">Stop</button>
          <button onClick={() => {props.childToParent(0,false,0); setTimer(0)}} className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">Reset</button>       
        </div>

    </div>
    );
}

export default Daniela

