import { Box } from '@mui/system'
import React, { useState } from 'react'
import "./breakTest.css";
import ScaleTwoToneIcon from '@mui/icons-material/ScaleTwoTone';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { BarChart } from './BarChart';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export const SuspentionTest = () => {
    const [data, setData] = useState("");
    const registration = "ABCD"
    const [btnCss, setBtncss] = useState("btn")
    const [result, setResult] = useState("000")
    const [weight, setWeight] = useState("00");
    const [state, setState] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const handeChange = () => {
        setDisabled(true);
        console.log("yess");
    };
    const handleSubmitClick = (e) => {
        e.preventDefault();
        setDisabled(true);
        console.log("yes");
        setBtncss("btn2")
    };
    return (
        <Box className="breakContainer">
            <Box className="headingflex ">
                <Box className="header3">
                    <h3 className="headingR">Suspension Test</h3>
                </Box >
                {/* <Box className="leftSide"></Box> */}
                <Box className="imgStyle">
                    {/* <img src='/image/carR.png' alt="car" className='imgh' />
                    <div className='break'>
                    </div>
                    <div className='breakTop'>
                    </div>

                    <div className='breakers'>
                        <div className='yellow'></div>
                        <div className='black'></div>
                        <div className='yellow'></div>
                        <div className='black'></div>
                        <div className='yellow'></div>

                    </div> */}
                </Box>
            </Box>
            {/* ..........................content ...................................... */}

            <Box className="content">
                <Box className="heading">
                    <div className='text-danger' style={{ width: "500px" }}>Registration No : OD29E8266 </div>
                    <div className='text-danger' style={{ width: "500px" }}>Applicant Name :  Kishor Kumar </div>
                </Box>
                </Box>
                {/* <Box className="flext">
                    <Box className="leftBox">

                        <Box className="flex space" > 
                            <h2 className='headigH'>Weight</h2>
                            <input value={"00.00  KG"} className='inputBox'/>
                            <ScaleTwoToneIcon className='weight' fontSize='40px' />
                        </Box>

                        <Box className="flex space" >
                            <h2 className='headigH'>Test Report</h2>
                            <input value={"00.00  U"} className='inputBox'/>
                            {result === "000" ? (<TimerOutlinedIcon className='timer' fontSize='40px' />) : (
                                <ThumbUpAltIcon className='result ' fontSize='10px ' />
                            )}
                        </Box>
                    </Box>
                    <Box className="rightBox">
                        <BarChart />
                        <button className={btnCss} disabled={disabled} onClick={handleSubmitClick}>Start </button>
                    </Box> */}
                {/* </Box> */}
                <div className='box-container'>
                    <div style={{width:"50%",textAlign:"right",marginTop:"150px"}}>
                        <span style={{fontSize:"40px",fontWeight:"bold",marginLeft:"20px",marginTop:"30px"}}>Left : </span>
                       <input style={{padding:"30px",width:"200px",heigth:"300px"}} className="inputDetail" value={"00.00 "}/>
                       <img src="https://www.vhv.rs/dpng/d/409-4098491_car-of-hatchback-model-sedan-car-icon-png.png" style={{width:"100px",height:"100px",marginLeft:"30px",borderRadius:"30px"}}/>
                       <br/>
                       <br/>
                       <br/>

                       <span style={{fontSize:"40px",fontWeight:"bold",marginLeft:"20px",marginTop:"30px"}}>Right : </span>
                       <input style={{padding:"30px",width:"200px",heigth:"200px"}} className="inputDetail"  value={"00.00 "}/>
                       <img src="https://simg.nicepng.com/png/small/97-975571_peersome-picture-stock-car-side-view-clipart.png" style={{width:"100px",height:"100px",marginLeft:"30px",borderRadius:"30px"}}/>
                       <br/>
                       <br/>
                       <br/>

                       <span style={{fontSize:"40px",fontWeight:"bold",marginLeft:"20px",marginTop:"30px"}}>Test Report : </span>
                       <input style={{padding:"30px",width:"200px",heigth:"200px"}} className="inputDetail"  value={"00.00 "}/>
                       <img src="https://thumbs.gfycat.com/WhisperedWateryCopperhead-max-1mb.gif" style={{width:"100px",height:"100px",marginLeft:"30px",borderRadius:"30px"}}/>
                   
                    </div>
                    <div style={{width:"50%",textAlign:"center"}}>
                       <div style={{fontSize:"30px",fontWeight:"bold",borderRadius:"30px",marginBottom:"50px"}}><img src='https://thumbs.gfycat.com/AccurateIllegalBirdofparadise-size_restricted.gif' style={{borderRadius:"30px",width:"200px"}}/></div>
                        
                        

                       <Link to="/visual"><Button style={{width:"200px",padding:"20px",background:"green",fontSize:"30px",color:"white",borderRadius:"30px", backgroundImage: "linear-gradient(#243d83, #7a99ef)"}}> Start</Button></Link>

                    </div>
                    
                </div>
           
        </Box>
    )
}