import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'; // Import Axios
import Accounts from '../Accounts/Accounts.js';

const Navbar = ({ isLoggedIn, onLoginStateChange }) => {
    const handleLogout = () => {
        // Send a POST request to the logout.php
        axios
            .post('http://localhost/Project/PHP/logout.php')
            .then((response) => {
                if (response.data.success) {
                    onLoginStateChange(false); // Change the login state to false
                    alert("Logged out successfully");
                } else {
                    alert("Logout failed, please try again.");
                }
            })
            .catch((error) => {
                console.error("Error logging out:", error);
                alert("An error occurred during logout. Please try again.");
            });
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
                        <Link to="/Donatenow">DonateNow</Link>
                    </li>
                    <li className="nav-links1">
                    <Accounts isLoggedIn={isLoggedIn} />
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
