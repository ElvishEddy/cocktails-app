import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__logo">
          <Link to="/">
            <img
              src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar__links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </nav>
  );
}
