// src/components/Header.js

import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Kayaking Club</h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/membership">Membership</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
