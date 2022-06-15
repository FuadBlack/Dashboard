import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import sidebarNav from "../configs/sidebarNav";

export const SideBar = () => {
  const { pathname } = useLocation();

  const activeNav = sidebarNav.findIndex((e) => e.link === pathname);

  const closeSidebar = () => {
    document.querySelector(".main-content").style.transform =
      "scale(1) translateX(0)";

    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main-content").style = "";
    },500);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="logo-close" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="menu">
        {sidebarNav.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`menu-item ${index === activeNav ? "active" : ""}`}
            onClick={closeSidebar}
          >
            <div className="menu-item-icon">{item.icon}</div>
            <div className="menu-item-text">{item.text}</div>
          </Link>
        ))}
        <div className="menu-item">
          <div className="menu-item-icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div className="menu-item-text">Logout</div>
        </div>
      </div>
    </div>
  );
};
