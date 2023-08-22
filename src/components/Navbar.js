import React from 'react';
import { Link } from 'react-router-dom';
import splash from "../images/dot.png"

//Navbar component for user dashboard
const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/user-dashboard">
          <img
            src={splash}
            alt="Logo"
            width="29"
            height="29"
            className="d-inline-block align-text-top me-2"
          />
          User Dashboard
        </a>
        <Link to="/login" className="btn btn-danger" onClick={onLogout}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
