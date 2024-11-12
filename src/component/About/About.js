import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Footer from '../Footer/Footer';
import {
  img16, img18, img19, img20,
  img22
} from "../assets";


function About() {
  return (

      <div className='about'>
        <div className='camp'>
            <h1>Blood Donation Camp</h1>
            <p>Welcome to Arogya BloodLine, a compassionate community dedicated 
               to saving lives through blood donation. Our mission is simple yet powerful: to ensure 
               that life-saving blood is available to those in need, whenever and wherever it's needed.
               We organize blood donation camps across various cities, bringing together donors, volunteers, 
               and healthcare professionals to make a difference. Whether you're a first-time donor or a 
               seasoned giver, your contribution can save lives and offer hope to patients in critical conditions.
            </p>
        </div>
        <div className='h1'>
          <h1>Donate Blood, Save Lives<br />Be the Reason <br/>Someone Smiles Again</h1>
        </div>

        <div className='about-image'>
          <img src={img16} alt="Blood-Donating Camp" />
          <div>
            <h2>We organize, empower,and deliver<br/>
            life-saving blood donations <br/>
            to support communities in need.</h2>
          </div>
        </div>

        <div className='about-image2'>
            <h4>Campaign</h4>
            <p>Our mission is to provide a platform for blood donation camps and connect donors with hospitals</p>
          <img src={img18} alt="Blood-Donating Camp" />
          <img src={img19} alt="Blood-Donating Camp" />
          <img src={img22} alt="Blood-Donating Camp" />
        </div>

        <div className='about-about'>
        <h2>Great care for<br/> great lives.</h2>
        
        <div className='about-content'>
        <div className='donate-image'>
            <img src={img20} alt="Blood-Donating Camp" />
          </div>
          <div className='about-content1'>
            <h5>We put lives first, knowing that every drop of donated blood can make a world of difference. 
                By inspiring communities to give,we help save lives, build resilience, 
                and create lasting impact for those in need.<br/><br/>Our commitment fuels our mission to serve 
                with compassion and care, ensuring quality, safety, and support for every donation. Together, 
                we make a difference—one donation at a time.
            </h5>
            <Link to='/donateNow'>  <button>DonateNow</button></Link>
          </div>
          
          </div>  
        </div>
      
        <div className='Footer'>
        <Footer/>
        </div>
    </div>

  );
 
};

export default About;
