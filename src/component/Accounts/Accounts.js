import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Accounts.css";


function Accounts() {

  const[isOpen,setIsopen]=useState(false);

  const toggleDropdown = () =>{
    setIsopen(!isOpen);
  }

  return (
    <>
    <div className='dropdown'>
     <button  className='dropbtn'  onClick={toggleDropdown}>Accounts</button>
      <ul className={`dropdown-content ${isOpen ? 'show' : "hide"}`}>
        <div className='expertise-container'>
           <div className='expertise-section'>  
            <h3>Our Mission</h3>

            <Link to='/profile'><li>Proflie</li></Link>
            <Link to='/registration'><li>Registration</li></Link>
            <Link to='/blood_recipient-reg'><li>Emergency Support</li></Link>
            <Link to='/'><li>Blood Camps</li></Link>
            <Link to='/about'><li>Donor Network</li></Link>
            <Link to='/about'><li>Health Safety</li></Link>
            <Link to='/'> <li>Awareness Drives</li></Link>
                  
            </div> 
          </div>
      </ul>
    </div>
    </>
  )
}

export default Accounts