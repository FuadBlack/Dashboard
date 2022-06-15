import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { TopNav } from "./components/TopNav";
import { Blank } from "./pages/Blank";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Blank />} />
            <Route path="products" element={<Blank />} />
            <Route path="customers" element={<Blank />} />
            <Route path="settings" element={<Blank />} />
            <Route path="stats" element={<Blank />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <div className="layout">
      <SideBar />
      <div className="main">
        <div className="main-content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
