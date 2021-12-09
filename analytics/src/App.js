import React from "react";
import "./App.css";
import { Smallcard } from "./Smallcard";
import { Nav } from "./Nav";
import { Line,Doughnut } from 'react-chartjs-2';
import faker from 'faker';
import { Card } from "@mui/material";

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
  labels: ['Father', 'Mother', 'Son'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 15],
      backgroundColor: [
        'rgba(247, 100, 74)',
        'rgba(88, 230, 159)',
        'rgba(76, 129, 228)',
      ],
      borderColor: [
        'rgba(247, 100, 74)',
        'rgba(88, 230, 159)',
        'rgba(76, 129, 228)',
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
      <h1 className="about">Analytics</h1>
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
    <div className="dashBoard">
      <h1>Dashboard</h1>
      <div className="smallCards">
        {tagdata.map((element)=><Smallcard tagName={element.tagName} price={element.price} />)}
      </div>
      <div className="charts">
        <div className="lineChart">
          <Card >
            <Line options={options} data={linedata} />
          </Card>
        </div>
        <div className="piChart">
          <Card>
          <Doughnut data={donetdata} />
          </Card>
        </div>
      </div>
    </div>
    
  )
}

