import React from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "./LoginLogoutButton";
import "./Navigation.css";

const Navigation = () => {
  const myFunction = () => {
    let x = document.getElementsByClassName("bar");
    for (let i = 0; i < x.length; i++) {
      x[i].classList.toggle("change");
    }
    let navItems = document.getElementsByClassName("nav-links");
    navItems[0].classList.toggle("hidden");
  };
  return (
    <div className="nav Container">
      <h1 className="heading">Update Box</h1>
      <div className="burger" onClick={myFunction}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>

      <ul className="hidden nav-links">
        <li className="nav-item">
          <Link to="/"> Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/teamUpdates"> My Team</Link>
        </li>
        <li className="nav-item">
          <Link to="/history"> My History</Link>
        </li>
        <li className="nav-item">
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
