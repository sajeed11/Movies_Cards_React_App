import React from "react";
import "./App.css";
const RowcontentData = (props) => {
  return (
    <ul>
      {props.subcontent.map((val, key) => {
        return (
          <li key={key}>
            <form>
              <label htmlFor={"elem" + val.title} className="subs">
                {val.title}
                <div id="label-icon">{val.icon}</div>
              </label>
              <input
                type="checkbox"
                id={"elem" + val.title}
                name={val.title}
                value={val.title}
              />
            </form>
          </li>
        );
      })}
    </ul>
  );
};

export default RowcontentData;
