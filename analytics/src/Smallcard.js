import React from "react";
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Card from '@mui/material/Card';

export function Smallcard({ tagName, price }) {
  return (
    <div className="cardSide">
      <Card style={{ height: "85px",backgroundColor:"white" }} variant="outlined">
      <div className="smallCard">
        <div>
          {tagName}
          <p style={{ fontSize: "20px" }}>&#36; {price}</p>
        </div>
        <DateRangeOutlinedIcon style={{ marginLeft: "auto" }} sx={{ fontSize: 40 }} />
      </div>
      </Card>
    </div>
  );
}
