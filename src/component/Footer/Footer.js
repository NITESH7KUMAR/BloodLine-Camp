import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({top:0 ,behavior:'smooth'});
       
    };

    return (
        <div className="footer">

            <footer>
                    <div className="foot-panel1" onClick={scrollTop}>
                       <p> Back to Top</p>
                    </div>
           
                <div className="foot-panel2">
                    <ul>
                        <p>Get to know Us</p>
                        <a href="Home">Home</a>
                        <a href="About">About Us</a>
                        <a href="Work">Work</a>
                    </ul>

                    <ul className='contect'>
                        <p>Connect with Us</p>
                        <a href="#facebook">
                            <i className="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="#twitter">
                            <i className="fab fa-twitter "></i> Twitter
                        </a>
                        <a href="#instagram">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="#linkedin">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </ul>
                    <ul>
                        <p>Our Services</p>
                        <a href="#donate-blood">Blood Donation Camps</a>
                        <a href="#city-camps">City Camp Locations</a>
                        <a href="#blood-donation-benefits">Why Donate Blood?</a>
                        <a href="#blood-requests">Blood Donation Requests</a>
                        <a href="#collection-centre">Blood Collection Centre</a>
                    </ul>
                    <ul>
                        <p>Let Us Help You</p>
                        <a href="#your-account">Your Account</a>
                        <a href="#returns">Feedback</a>
                        <a href="#help">Help</a>
                    </ul>
                    {/* <p>© 2024 My Website. All rights reserved.</p> */}
                </div>
            </footer>

        </div>
    );
};

export default Footer;
