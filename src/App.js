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
import Unitate from './pages/Unitate';
import ElementTermic from './pages/ElementTermic';
import db from './firebase'
import { 
    collection, onSnapshot, doc, setDoc
  } from 'firebase/firestore'


function App() {

  const data = useData();
  const setData = useSetData();
  const [dbData, setDbData] = useState({})


  const dataFetch = () => {
        
    const colRef = collection(db, 'utilities')

    onSnapshot(colRef, (snapshot) => {
        let dbCopy = null;
        console.log(snapshot.docs)
        snapshot.docs.forEach((doc) => {
          dbCopy = doc.data();
        })
        console.log('What i get:',dbCopy);
        setDbData(dbCopy);
        console.log(dbCopy);
    })
  }

useEffect(() => {
    dataFetch();
},[])
useEffect(() => { 
  setData(dbData)
},[dbData])

  return (
    <Router>
      <div className="bg-[url('./media/house.jpg')] bg-fixed bg-opacity-0 w-full h-screen bg-cover touch-none">
        <div className="sticky top-[85%] z-30 mx-[50%] my-[-2%]"><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gaze" element={<ElementTermic name="gas" />} />
          <Route path="/curent" element={<ElementTermic name="electricity" />} />     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
