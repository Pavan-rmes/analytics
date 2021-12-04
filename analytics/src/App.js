import React from "react";
import "./App.css";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Card from '@mui/material/Card';

import { Line } from "react-chartjs-2";
import { data, legend, options } from "./data";

export default function App() {
  return (
    <div className="App">
      {/* <Line data={data} legend={legend} options={options} /> */}
      <Nav />
    </div>
  );
}


function Nav(){
  return(
    <div>
      <navigation className="navigation">
        <div className="navigationComp">
          <HomeIcon />
          Home
        </div>
        <div className="navigationComp">
          <DashboardIcon />
          Dashboard
        </div>
        <div className="navigationComp">
          <GroupIcon />
          Groups
        </div>
        <div className="navigationComp">
          <AnalyticsIcon />
          Analytics
        </div>
        <div className="navigationComp">
          <ShoppingCartIcon />
          Cart
        </div>
        <div className="navigationComp">
          <NotificationsIcon />
          Notification
        </div>
        <div className="navigationComp">
          <SettingsIcon />
          Settings
        </div>
      </navigation>
    </div>
  )
}