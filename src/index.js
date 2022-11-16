import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataContext, { Data } from './DataContext';

const basicData = {
  electricity: {
    name: 'CURENT',
    initialIndex: 2167,
    newInput: {
      oldIndex:0,
      newIndex: 0,
      date: null,
    },
    pricePerIndexUnit: 0.7,
    totalCost: 0
  },
  gas: {
    name: 'GAZE',
    initialIndex: 10375,
    newInput: {
      oldIndex:0,
      newIndex: 0,
      date: new Date(),
    },
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
