import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataContext from './DataContext';

const basicData = {
  electricity: {
    name: 'CURENT',
    dayForReset: null,
    initialIndex: 2167,
    oldIndex:0,
    newIndex: 0,
    date: null,
    pricePerIndexUnit: 0.7,
    totalCost: 0
  },
  gas: {
    name: 'GAZE',
    dayForReset: 17,
    initialIndex: 10375,
    oldIndex:0,
    newIndex: 0,
    date: null,
    pricePerIndexUnit: 3.41,
    totalCost: 0 
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <DataContext value={basicData}><App /></DataContext>
  </React.StrictMode>
);
