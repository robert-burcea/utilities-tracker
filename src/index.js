import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataContext from './DataContext';

const data = {
  IndexGas:0,
  IndexElectricity:0,
  recalibrateWithIndex: () => {
    this.gas.newIndex = this.IndexGas;
    this.electricity.newIndex = this.IndexElectricity;
  },
  recalculateOverall: () => {
    let kwhGas = 0;
    let kwhElectric = 0;
    for(let i=0; i<= this.termicElements.length(); i++) {
      if(this.termicElements[i].type === "gass")
        kwhGas = kwhGas + this.termicElements[i].totalKwh;
      else
        kwhElectric = kwhElectric + this.termicElements[i].totalKwh;
    }
    this.gas.totalKwh = this.gas.totalKwh + kwhGas;
    this.electricity.totalKwh = this.electricity.totalKwh + kwhElectric;
  },
  gas: {
    oldIndex:10375,
    oldIndexDate:11/11/2022,
    newIndex:0,
    newMeters:0,
    totalCost:0,
    totalMeters:0,
    totalKwh:0,
    pricePerKwh:0.31,
    kwhPerMeter:10.870,
    calculateTotalMetersToKwh: () => {
      return this.totalMeters*this.kwhPerMeter;
    },
    calculateTotalMeters: () => {
      this.totalMeters = this.newIndex - this.oldIndex;
    },
    calculateTotalCost: () => {
      this.totalCost = this.calculateTotalMetersToKwh() * this.pricePerKwh; 
    },
    calculateNewIndex: () => {
      this.newIndex = this.OldIndex + this.newMeters;
    },
  },
  electricity: {
    oldIndex:null,
    oldIndexDate:11/11/2022,
    newIndex:0,
    newKwh:0,
    totalCost:0,
    totalKwh:0,
    pricePerKwh:0.7,
    calculateTotalCost: () => {
      this.totalCost = this.totalKwh * this.pricePerKwh; 
    },
    calculateNewIndex: () => {
      this.newIndex = this.OldIndex + this.newKwh;
    },
  },
  termicElements: [
    {
      id:1, 
      name:"daniela",
      type:"gass",
      hoursTotal:0,
      priceTotal:0,
      active:false,
      startTime:null,
      totalKwh:0,
      totalPrice:0,
      currentPrice:0
  },
  {
    id:2, 
    name:"diana",
    type:"gass",
    hoursTotal:0,
    priceTotal:0,
    active:false,
    startTime:null,
    totalKwh:0,
    totalPrice:0,
    currentPrice:0
},
{
  id:3, 
  name:"robert",
  type:"gass",
  hoursTotal:0,
  priceTotal:0,
  active:false,
  startTime:null,
  totalKwh:0,
  totalPrice:0,
  currentPrice:0
},
{
      id:4, 
      name:"calorifer-a",
      type:"electric",
      hoursTotal:0,
      priceTotal:0,
      active:false,
      startTime:null,
      totalKwh:0,
      totalPrice:0,
      currentPrice:0
  },
  {
    id:5, 
    name:"calorifer-b",
    type:"electric",
    hoursTotal:null,
    priceTotal:null,
    active:false,
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
