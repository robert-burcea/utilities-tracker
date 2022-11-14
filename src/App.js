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
import Unitate from './pages/Unitate';
import {useData, useSetData} from './DataContext'


function App() {

  const data = useData();
  const setData = useSetData();

  return (
    <Router>
      <div className="sticky top-0 z-30 mx-[50%] my-[-2%]"><Navbar /></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costuri" element={<Costuri />} />
        <Route path="/unitati" element={<Unitati />} />
        <Route path="/unitati/:nume" element={<Unitate />} />
      </Routes>
    </Router>
  );
}

export default App;
