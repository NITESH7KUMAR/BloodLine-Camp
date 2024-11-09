import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Accounts from '../Accounts/Accounts.js';

const Navbar = ({ isLoggedIn, onLoginStateChange }) => {
    const handleLogout = () => {
        onLoginStateChange(false); // Change the login state to false
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Humaan</div>
                <ul className="nav-links">
                    <li className="nav-links1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-links1">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-links1">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="nav-links1">
                        <Link to="/d-blood">DonateNow</Link>
                    </li>
                    <li className="nav-links1">
                        <Accounts/>
                    </li>
                </ul>

                <div className="login">
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>

                <div className="logo1">Humaan</div>
            </nav>
        </header>
    );
};

export default Navbar;
