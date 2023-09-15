import React from "react";
import "./App.css";
import { SideBarData } from "./SideBarData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RowcontentData from "./RowcontentData";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sideBar">
      <ul className="SidebarList">
        {SideBarData.map((val, key) => {
          if (val.childrens) {
            return (
              <li
                key={key}
                className={open ? "row-open" : "row"}
                // id={window.location.pathname === val.link ? "active" : ""}
                // onClick={() => {
                //   window.location.pathname = val.link;
                // }}
              >
                <div className="row-main">
                  <div id="icon">{val.icon}</div>{" "}
                  <div id="title">
                    {val.title}
                    <div onClick={() => setOpen(!open)} id="toggle">
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </div>
                  </div>
                </div>
                <div className="row-content">
                  <RowcontentData subcontent={val.childrens} />
                </div>
              </li>
            );
          } else {
            return (
              <li
                key={key}
                className="row"
                // id={window.location.pathname === val.link ? "active" : ""}
                // onClick={() => {
                //   window.location.pathname = val.link;
                // }}
              >
                <div id="icon">{val.icon}</div>{" "}
                <div id="title">{val.title}</div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default SideBar;
