import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import Contact from './component/Contact/Contact.js';
import DonateNow from './component/Donatenow/DonateNow.js';
import Navbar from './component/Navbar/Navbar.js';
import Signup from './component/Signup/Signup.js';
import Login from './component/Login/Login.js';
import ProfilePage from './component/Accounts/Profile.js';
import Registration from './component/Accounts/Registration.js';
import BloodRecipient from './component/Accounts/blood_recipient-reg.js';


function App() {
  
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    // Update login state in localStorage
    const handleLoginStateChange = (loggedIn) => {
        localStorage.setItem('isLoggedIn', loggedIn);
        setIsLoggedIn(loggedIn); // Update state to trigger re-render
    };

    return (
        <BrowserRouter>
            
            <Navbar isLoggedIn={isLoggedIn} onLoginStateChange={handleLoginStateChange} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/DonateNow" element={<DonateNow />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login onLogin={() => handleLoginStateChange(true)} />} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/registration" element={<Registration/>} />
                <Route path="/blood_recipient-reg" element={<BloodRecipient/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
