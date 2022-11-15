import React, {useState, useEffect} from 'react'
import { useData, useSetData } from "../DataContext";

const Daniela = () => {
    const data = useData();
    const setData = useSetData();
    const [time, setTime] = useState(data.timer);
    const [running, setRunning] = useState(data.running);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    useEffect(() => {
        if(time) 
            setData({...data,timer:time})
    },[time])
    return (
      <div className="stopwatch flex flex-col items-center m-2 p-1">
        <div className="numbers text-xl shadow-xl rounded bg-green-100 p-2 m-2">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={() => {setRunning({...data,running:true}); setData({...data, running:true})}} className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">Start</button>
          <button onClick={() => {setRunning({...data,running:true}); setData({...data, running:true})}} className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">Stop</button>
          <button onClick={() => setTime(0)} className="text-xl shadow-xl rounded bg-green-100 p-2 m-2 hover:scale-[125%]">Reset</button>       
        </div>
      </div>
    );
}

export default Daniela

