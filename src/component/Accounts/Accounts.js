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
            <li>Registration</li>
            <li>Emergency Support</li>
            <li>Blood Camps</li>
            <li>Donor Network</li>
            <li>Health Safety</li>
            <li>Awareness Drives</li>
                  
            </div> 
          </div>
      </ul>
    </div>
    </>
  )
}

export default Accounts