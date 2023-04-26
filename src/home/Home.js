
import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../component/Dashboard'
import './home.css'
export default function Home() {
  return (
    <>
      <header >
        <div className="logosec" >
          <img src='https://highrangegarage.com/wp-content/uploads/2015/05/auto-service-logo-car-repair-icon-vector-22266860.jpg' className="imgName" />
          <p className="logo" style={{ fontWeight: "bold", fontSize: "20px", lineHeight: "1" }}>SHRIDHAR AUTOMOBILE TESTING EQUIPMENTE-36 RIICO <br></br>INDUSTRIAL AREA KHUSKHERA BHIWADI(ALWAR)</p>
        </div>
        <div className="searchbar">
        </div>
      </header>
      <input type="checkbox" id="active"/>
        <label for="active" class="menu-btn"> <img src=
              "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
              className="dpicn"
              alt="dp" /></label>
        <div class="wrapper">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Setting</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>
        








      </>
      )
}
