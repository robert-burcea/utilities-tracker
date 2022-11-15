import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Costuri from "./pages/Costuri";
import Unitati from "./pages/Unitati";
import Home from "./pages/Home";
import Navbar from './pages/Navbar';
import {useData, useSetData} from './DataContext'
import House from './media/house.jpg'
import Daniela from './components/Daniela';


function App() {

  const data = useData();
  const setData = useSetData();
  const [timerDaniela, setTimerDaniela] = useState(data.termicElements[0].timer);
  const [runningDaniela, setRunningDaniela] = useState(data.termicElements[0].running);
  const [timerDiana, setTimerDiana] = useState(0);
  const [timerRobert, setTimerRobert] = useState(0);
  const [timerCalorifer1, setTimerCalorifer1] = useState(0);
  const [timerCalorifer2, setTimerCalorifer2] = useState(0);

  const setTimerGlobal = (time,i) => {
    var newTermicElements = data.termicElements;
    newTermicElements[i].timer = time;
    return newTermicElements;
  }
  const setRunningGlobal = (state,i) => {
    var newTermicElements = data.termicElements;
    newTermicElements[i].running = state;
    return newTermicElements;
  }
  const childToParent = (timer, running, id) => {
    switch (id) {
      case 0: {
        setTimerDaniela(timer);
        setRunningDaniela(running);
      }
      default: {
        setTimerDaniela(timer);
        setRunningDaniela(running);
      }
    }
  }

    //aici le salvezi in DB:
  useEffect(() => {
    if(timerDaniela) 
        setData({...data,termicElements: setTimerGlobal(timerDaniela,0)})
    if(runningDaniela)
        setData({...data, termicElements: setRunningGlobal(runningDaniela, 0)})
},[timerDaniela, runningDaniela])

  return (
    <Router>
      <div className="bg-[url('./media/house.jpg')] bg-fixed bg-opacity-0 w-full h-screen bg-cover touch-none">
        <div className="sticky top-0 z-30 mx-[50%] my-[-2%]"><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/costuri" element={<Costuri />} />
          <Route path="/unitati" element={<Unitati />} />
          <Route path="/unitati/daniela" element={<Daniela 
          timerDaniela={timerDaniela} 
          runningDaniela={runningDaniela}
          childToParent={childToParent}
          />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
