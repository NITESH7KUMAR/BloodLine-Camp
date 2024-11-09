import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Hcarousel from './Hcarousel';
import Footer from '../Footer/Footer';
import {
  img1, img2, img3, img4, img5,
  img6
} from "../assets";


function Home() {
  return (

      <div className='home'>
        <div className='h1'>
          <h1>Life-Saving Gift<br />Empowering Hope</h1>
        </div>

        <div className='home-image'>
          <img src={img1} alt="Blood-Donating Camp" />
          <div>
            <h2>We organize, empower,and deliver<br/>
            life-saving blooddonations <br/>
            to support communities in need.</h2>
          </div>
          <div className='home-image1'>
            <img src={img3} alt="Blood-Donating Camp" />
          </div>
        </div>

        <div className='home-image2'>
          <img src={img4} alt="Blood-Donating Camp" />
          <img src={img5} alt="Blood-Donating Camp" />
        </div>

        <div className='home-image3'>
          <img src={img6} alt="Blood-Donating Camp" />
        </div>

        <div className='home-about'>
        <h2>Great care for<br/> great lives.</h2>
        
        <div className='home-content'>
        <div className='about-image'>
            <img src={img2} alt="Blood-Donating Camp" />
          </div>
          <div className='about-content1'>
            <h5>We put lives first, knowing that every drop of donated blood can make a world of difference. 
                By inspiring communities to give,we help save lives, build resilience, 
                and create lasting impact for those in need.<br/><br/>Our commitment fuels our mission to serve 
                with compassion and care, ensuring quality, safety, and support for every donation. Together, 
                we make a difference—one donation at a time.
            </h5>
            <Link to='/about'>  <button>About Us</button></Link>
          </div>
          
          </div>  
        </div>
        <div className='Hcarousel'>
          <h1>What's New</h1>
          <Hcarousel/>
        </div>
        <div className='Footer'>
        <Footer/>
        </div>
    </div>

  );
 
};

export default Home;
