import React from 'react'
import './test.css'
import { Link } from 'react-router-dom'
import Home from '../home/Home'
export default function Test() {
  return (
    <>
    <Home/>
      <div  >
      <div className="d-flex  justify-content-between">
          <div className="automation">

          </div>
          <div className='nonAutomation'>

          </div><div className="report">

          </div>
        </div>
        <div className="d-flex  justify-content-between">
          <Link to="/break" style={{textDecoration:"none"}}>
          <div class="card" style={{ background: "red" }}>
            <h2  className="headingS">Automated Test</h2>
          </div>
          </Link>
          <Link to="/stage" style={{textDecoration:"none"}}>
          <div class="card">
            <h2 className="headingS">Non Automated Test</h2>
          </div>
          </Link>
          <Link to="/report" style={{textDecoration:"none"}}>
          <div class="card" style={{ background: "green" }}>
            <h2 className="headingS">Report</h2>
          </div>
          </Link>
        </div>
        
      </div>
      {/* <Link to="/automated" > <div class="loader" >
  <span>A</span>
  <span>U</span>
  <span>T</span>
  <span>O</span>
  <span>M</span>
  <span>A</span>
  <span>T</span>
  <span>E</span>
  <span>D</span>
   <span> </span> <span> </span>
   <span> </span> <span> </span>
  <span>T</span>
  <span>E</span>
  <span>S</span>
  <span>T</span>
  </div>
  </Link>
  <Link to="/nonautomated">
<div class="loader">
  <span>N</span>
  <span>O</span>
  <span>N</span>
  <span> </span> <span> </span>

  <span>A</span>
  <span>U</span>
  <span>T</span>
  <span>O</span>
  <span>M</span>
  <span>A</span>
  <span>T</span>
  <span>E</span>
  <span>D</span>
   <span> </span> <span> </span>
  <span>T</span>
  <span>E</span>
  <span>S</span>
  <span>T</span>
</div>
</Link>
<Link to="/report">
<div class="loader">
  <span>R</span>
  <span>E</span>
  <span>P</span>
  <span>O</span>
  <span>R</span>
  <span>T</span>
 
</div>
</Link> */}
    </>
  )
}
