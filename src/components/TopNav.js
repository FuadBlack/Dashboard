import React from "react";
import { data } from "../constants/data";

export const TopNav = () => {
  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  return (
    <div className="topnav">
      <div className="user-info">
        <div className="user-info-img">
          <img src={data.user.img} alt="" />
        </div>
        <div className="user-info-name">
          <span>{data.user.name}</span>
        </div>
      </div>
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};
