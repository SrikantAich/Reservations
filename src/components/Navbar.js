import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for adding custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Details</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reservation">Reservations</Link>
        </li>
        <li className="navbar-item">
          <Link to="/adventures">Adventures</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
