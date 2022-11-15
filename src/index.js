import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataContext, { Data } from './DataContext';

const data = {
  timer:0,
  running:false,
  dayForReset: 11,
  history:{},
  IndexGas:0,
  IndexElectricity:0,
  testNumber: 1,
  resetTermicElements: () => {
    for(let i=0; i<= data.termicElements.length(); i++) {
      data.termicElements[i].hoursTotal =  0;
      data.termicElements[i].priceTotal = 0;
      data.termicElements[i].totalKwh = 0;
      data.termicElements[i].totalPrice = 0;
      data.termicElements[i].currentPrice = 0;
  }
  },
  resetGas: () => {
    data.gas.newIndex = 0;
    data.gas.newKwh = 0;
    data.gas.newMeterHours = 0;
    data.gas.totalCost = 0;
    data.gas.totalKwh = 0;
  },
  resetElectricity: () => {
    data.electricity.newIndex = 0;
    data.electricity.newKwh = 0;
    data.electricity.newElectricHours = 0;
    data.electricity.totalCost = 0;
    data.electricity.totalKwh = 0;
  },
  resetMonth: () => {
      data.IndexGas = 0;
      data.IndexElectricity = 0;
      data.resetTermicElements();
      data.resetGas();
      data.resetElectricity();
      console.log('Reset Complete')
  },
  initiate: () => {
    if((new Date().getDate()) === data.dayForReset)
      data.resetMonth();
    data.recalculateOverAll();
  },
  recalibrateWithIndex: () => {
    data.gas.newIndex = data.IndexGas;
    data.electricity.newIndex = data.IndexElectricity;
  },
  recalculateOverall: () => {
    let kwhGas = 0;
    let kwhElectric = 0;
    for(let i=0; i<= data.termicElements.length(); i++) {
      if(data.termicElements[i].type === "gas")
        kwhGas = kwhGas + data.termicElements[i].totalKwh;
      else
        kwhElectric = kwhElectric + data.termicElements[i].totalKwh;
    }
    data.gas.totalKwh = kwhGas;
    data.electricity.totalKwh = kwhElectric;
  },
  gas: {
    history:{},
    oldIndex:10375,
    oldIndexDate:11/11/2022,
    newIndex:0,
    newKwh:0,
    newMeterHours:0,
    totalCost:0,
    totalKwh:0,
    pricePerKwh:0.31,
    kwhPerMeter:10.87,
    recalibrateGasIndex: () => {
      data.gas.calculateGasNewKwh();
      data.gas.calculateGasTotalCost();
      data.gas.calculateGasNewIndex();
    },
    calculateGasNewKwh: () => {
      data.gas.newKwh = data.gas.newMeterHours*data.gas.kwhPerMeter;
    },
    calculateGasTotalCost: () => {
      data.gas.totalCost = data.gas.totalCost + data.gas.newKwh * data.gas.pricePerKwh; 
    },
    calculateGasNewIndex: () => {
      data.gas.newIndex = data.gas.oldIndex + data.gas.newKwh/data.gas.kwhPerMeter;
    },
  },
  electricity: {
    history:{},
    oldIndex:null,
    oldIndexDate:11/11/2022,
    newIndex:0,
    newElectricHours:0,
    newKwh:0,
    totalCost:0,
    totalKwh:0,
    kwhPerHour:2.5,
    pricePerKwh:0.7,
    calculateElectricNewKwh: () => {
      data.electricity.newKwh = data.electricity.newElectricHours * data.electricity.kwhPerHour;
    },
    calculateElectricTotalCost: () => {
      data.totalCost = data.totalKwh * data.pricePerKwh; 
    },
    calculateElectricNewIndex: () => {
      data.newIndex = data.OldIndex + data.newKwh;
    },
  },
  termicElements: [
    {
      id:1,
      timer:0,
      history:{}, 
      name:"soba-daniela",
      type:"gas",
      hoursTotal:0,
      priceTotal:0,
      running:false,
      startTime:null,
      totalKwh:0,
      totalPrice:0,
      currentPrice:0
  },
  {
    id:2,
    timer:0,
    history:{}, 
    name:"soba-diana",
    type:"gas",
    hoursTotal:0,
    priceTotal:0,
    running:false,
    startTime:null,
    totalKwh:0,
    totalPrice:0,
    currentPrice:0
},
{
  id:3,
  timer:0,
  history:{}, 
  name:"soba-robert",
  type:"gas",
  hoursTotal:0,
  priceTotal:0,
  running:false,
  startTime:null,
  totalKwh:0,
  totalPrice:0,
  currentPrice:0
},
{
      id:4, 
      timer:0,
      history:{},
      name:"calorifer-a",
      type:"electric",
      hoursTotal:0,
      priceTotal:0,
      running:false,
      startTime:null,
      totalKwh:0,
      totalPrice:0,
      currentPrice:0
  },
  {
    id:5, 
    timer:0,
    history:{},
    name:"calorifer-b",
    type:"electric",
    hoursTotal:null,
    priceTotal:null,
    running:false,
    startTime:null,
    totalKwh:null,
    totalPrice:null,
    currentPrice:null
}
]

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <DataContext value={data}><App /></DataContext>
  </React.StrictMode>
);
