import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div style={{height:'60px'}}>
    <nav className='navbar navbar-expand-sm fs-5 ' style={{backgroundColor:'#285F93'}}>
        <ul className='navbar-nav ms-auto mb-lg-0 '>
        <form className="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>

            <li className='nav-item'>
                <NavLink className="nav-link" to='/home' style={{color:'white'}}>Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className="nav-link" to="/signin" style={{color:'white'}}>SignIn</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className="nav-link" to='/signup' style={{color:'white'}}>SignUp</NavLink>
            </li>
        </ul>
    </nav>
</div>

);
}

export default NavBar;