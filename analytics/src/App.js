import React from "react";
import "./App.css";
import { Smallcard } from "./Smallcard";
import { Nav } from "./Nav";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line,Doughnut } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Earnings Overview',
    },
    scales: {
      y: {
          beginAtZero: true
      }
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const donetdata = {
  labels: ['Daily', 'Weekly', 'Monthly'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 15],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const linedata = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      lineTension: 0.17
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      lineTension: 0.17
    },
  ],
};

export default function App() {
  return (
    <div>
      <div className="App">
      {/* <Line data={data} legend={legend} options={options} /> */}
      <Nav />
      <Dashboard />
    </div>
    
    </div>
  );
}


const tagdata = [{tagName:"EARNINGS (Daily)",price:"500"},
          {tagName:"EARNINGS (MONTHLY)",price:",15,000"},
          {tagName:"EARNINGS (MONTHLY)",price:"40,000"},
          {tagName:"EARNINGS (ANNUAL)",price:"215,000"}]

function Dashboard(){
  return(
    <div style={{marginLeft:"2%"}}>
      <h1>Dashboard</h1>
      <div style={{display:"flex",columnGap:"50px",flexWrap:"wrap"}}>
        {tagdata.map((element)=><Smallcard tagName={element.tagName} price={element.price} />)}
      </div>
      <div style={{display:"flex",marginTop:"50px"}}>
        <div style={{width:"1000px",height:"1000px"}}>
          <Line options={options} data={linedata} />
        </div>
        <div style={{width:"400px",height:"400px",marginTop:"50px"}}>
          <Doughnut data={donetdata} />
        </div>
      </div>
    </div>
    
  )
}

