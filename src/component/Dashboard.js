import React from 'react'
import { Link } from 'react-router-dom'
import { Chart } from '../component/Chart'
import Footer from './Footer'
import Home from '../home/Home'
import RtoDetails from './RtoDetails'
export default function Dashboard() {
    return (
        <>
        <Home/>
        
            <div className="main ">
            <RtoDetails/>
                <div className="searchbar2">
                    <input type="text"
                        name=""
                        id=""
                        placeholder="Search" />
                    <div className="searchbtn">
                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                            className="icn srchicn"
                            alt="search-button" />
                    </div>
                </div>

                <div className="box-container">
                    

                    <Link to="/calibration" style={{ textDecoration: "none" }}>
                        <div className="box box2">
                            <div className="text">
                                <h2 className="topic-heading"></h2>
                                <h2 className="topic">Calibration Details</h2>
                            </div>

                            <img src=
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Gak4-Ih_v2II1YUJTXnsMv0lmWmbW7M_JdVQFNvmX4M8kB122fcfqAq8VDsUGbuDH98&usqp=CAU"
                                alt="likes"  style={{borderRadius:"50%"}}/>
                        </div>
                    </Link>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                        <div className="box box1">
                            <div className="text">
                                <h2 className="topic-heading"></h2>
                                <h2 className="topic">Appointment Schedule</h2>
                            </div>

                            {/* <div> <i className="fa-solid fa-address-card" style={{color:"white"}}></i></div> */}
                            {/* <i className="fa-solid fa-address-card" style={{color:"white",width:"100px",height:"100px"}}></i> */}
                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bNB-TMdwUAdWlEqZYyXXZKIXS7Pdh4OGbg&usqp=CAU" style={{borderRadius:"50%"}}/> */}
                            <img src=
                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCHXwatkUu9VX9QqiyMHbcCf49kLtd2R1s9tXPgqZS0cgWfFcO7-dYfeT-NvdJduP_4g&usqp=CAU"
                                alt="Views" style={{borderRadius:"50%"}}/>
                        </div></Link>

                    <Link to="/check/vehicle" style={{ textDecoration: "none" }}>

                        <div className="box box3">
                            <div className="text">
                                <h2 className="topic-heading"></h2>
                                <h2 className="topic">Testing Open</h2>
                            </div>


                            <img src=
                                "https://w1.pngwing.com/pngs/782/239/png-transparent-car-logo-motor-vehicle-service-automobile-repair-shop-car-tuning-auto-mechanic-engine-mot-test-maintenance.png"
                                alt="comments" style={{borderRadius:"50%"}}/>
                        </div>
                    </Link>
                    {/* <div className="box box4">
                        <div className="text">
                            <h2 className="topic-heading">70</h2>
                            <h2 className="topic">Published</h2>
                        </div>

                        <img src=
                            "https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published" />
                    </div> */}
                </div>

                <div className="report-container">
                    <div className="report-header">
                        <h1 className="recent-Articles">Annual Percentage Of Testing</h1>
                        
                    </div>
                     <Chart/>

                </div>
                
                <Footer/>
            </div>

        </>
    )
}
