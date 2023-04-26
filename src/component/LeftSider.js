import React from 'react'
import { Link } from 'react-router-dom'
export default function LeftSider() {
  return (
    
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              <Link to='/' style={{ textDecoration: "none", justifyContent: "center", color: "black" }}>

              <div className="nav-option option1">
                <img src=
                  "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  className="nav-img"
                  alt="dashboard" />
                <p> Dashboard</p>
              </div>
              </Link>
              <Link to='/calibration' style={{ textDecoration: "none", justifyContent: "center", color: "black" }}>
                <div className="option2 nav-option">
                  <img src=
                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                    className="nav-img"
                    alt="articles" />
                  <p>Calibration</p>

                </div> </Link>

              <Link to='/report' style={{ textDecoration: "none", justifyContent: "center", color: "black" }}>
                <div className="nav-option option3">
                  <img src=
                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/5.png"
                    className="nav-img"
                    alt="report" />
                  <p> Report</p>
                </div>
              </Link>

              {/* <div className="nav-option option4">
                <img src=
                  "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/6.png"
                  className="nav-img"
                  alt="institution" />
                <p> Institution</p>
              </div> */}
              <Link to='/profile' style={{ textDecoration: "none", justifyContent: "center", color: "black" }}>
                <div className="nav-option option5">
                  <img src=
                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
                    className="nav-img"
                    alt="blog" />
                  <p> Profile</p>
                </div>
              </Link>
              <Link to='/setting' style={{ textDecoration: "none", justifyContent: "center", color: "black" }}>
                <div className="nav-option option6">
                  <img src=
                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183320/4.png"
                    className="nav-img"
                    alt="settings" />
                  <p> Settings</p>
                </div>
              </Link>
              <Link to='/' style={{ textDecoration: "none", justifyContent: "center", color: "black" }}>
                <div className="nav-option logout">
                  <img src=
                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                    className="nav-img"
                    alt="logout" />
                  <p>Logout</p>
                </div>
              </Link>

            </div>
          </nav>
        </div>
        
  )
}
