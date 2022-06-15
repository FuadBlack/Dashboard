import React from "react";
import { data } from "../constants/data";

const icons = [
  <i className="bx bx-receipt"></i>,
  <i className="bx bx-user"></i>,
  <i className="bx bx-cube"></i>,
  <i className="bx bx-dollar"></i>,
];

export const OverallList = () => {
  return (
    <ul className="overallList">
      {data.overall.map((item, index) => (
        <li className="item">
          <div className="icon">{icons[index]}</div>
          <div className="info">
            <div className="title">{item.value}</div>
            <span>{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
