import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TNavBar.css'

function TNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-pill">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Your Logo</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/tripdetails/bookbus">Bus</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/tripdetails/booktrain">Train</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/tripdetails/bookflight">Flight</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/tripdetails/bookcab">Car</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TNavBar;
