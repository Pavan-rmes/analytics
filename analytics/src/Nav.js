import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';


export function Nav() {
  const [navShow, setNaveShow] = useState(false);

  function navButton() {
    setNaveShow(navShow === false ? true : false);
  }

  return (
    <div>
      <navigation className="navigation">
        <div className="navigationComp">
          <HomeIcon />
          {navShow === false ? <p>Home</p> : <p></p>}
        </div>
        <div className="navigationComp">
          <DashboardIcon />
          {navShow === false ? <p>Dashboard</p> : <p></p>}
        </div>
        <div className="navigationComp">
          <GroupIcon />
          {navShow === false ? <p>Groups</p> : <p></p>}
        </div>
        <div className="navigationComp">
          <AnalyticsIcon />
          {navShow === false ? <p>Analytics</p> : <p></p>}
        </div>
        <div className="navigationComp">
          <ShoppingCartIcon />
          {navShow === false ? <p>Cart</p> : <p></p>}
        </div>
        <div className="navigationComp">
          <NotificationsIcon />
          {navShow === false ? <p>Notification</p> : <p></p>}
        </div>
        <div className="navigationComp">
          <SettingsIcon />
          {navShow === false ? <p>Settings</p> : <p></p>}
        </div>
        <IconButton onClick={() => navButton()} color="primary" aria-label="upload picture" component="span">
          {navShow === false ?
            <ChevronLeftIcon sx={{ color: "white" }} fontSize="large" /> :
            <ChevronRightIcon sx={{ color: "white" }} fontSize="large" />}
        </IconButton>
      </navigation>
    </div>
  );
}
