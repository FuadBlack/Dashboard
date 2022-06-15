import React, { useEffect, useRef } from "react";
import { data } from "../constants/data";
import { ProgressBar } from "./ProgressBar";

export const RevenueList = () => {
  return (
    <ul className="revenue-list">
      {data.revenueByChannel.map((item, index) => (
        <li className="item" key={item}>
          <div className="item__title">
            {item.title}
            <span
              className={`${item.value < 50 ? "txt-success" : "txt-danger"}`}
            >
              {item.value}%
            </span>
          </div>
          <div>
            <ProgressBar value={item.value} />
          </div>
        </li>
      ))}
    </ul>
  );
};
