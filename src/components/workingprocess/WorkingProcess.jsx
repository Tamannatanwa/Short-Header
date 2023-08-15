import React from "react";
import MessageIcon from '@mui/icons-material/Message';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ArrowForward } from "@mui/icons-material";
import "./WorkingProcess.css";
const arr = [
  {
    icon: <MessageIcon className="digitalIcon"/>,
    title: "DISCUSS THE PROJECT",
  },
  {
    icon: <TipsAndUpdatesIcon className="digitalIcon"/>,
    title: "LOT OF CONCEPTING",
  },
  {
    icon: <StickyNote2Icon className="digitalIcon"/>,
    title: "UX/UI PLANNING",
  },
  {
    icon: <WbSunnyIcon className="digitalIcon"/>,
    title: "DESIGN",
  }
];
const WorkingProcess = () => {
  return (
    <>
      <div className="workingParent">
        <div><p style={{fontSize:"2rem"}}>MY WORKING PROCESS</p></div>
        <div><p>Lorem ipsum dolor amet, consecte tempor incididunt</p></div>
      </div>
      <div className="flex">
        {arr.map((ele) => {
          return (
            <>
            <div key={ele.title}  className="childCard childCard1">
              <a href="https://mobirise.com/" className="digitalIconContent">{ele.icon}</a>
              <h2>{ele.title}</h2>
              <p className="loremData1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span>Learn more</span></p>
            </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default WorkingProcess;