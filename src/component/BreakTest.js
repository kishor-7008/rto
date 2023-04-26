import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import "./breakTest.css";
import ScaleTwoToneIcon from '@mui/icons-material/ScaleTwoTone';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { BarChart } from './BarChart';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { io } from "socket.io-client"
// import Equalizer from './Equlizer';
import Poll from './Poll';
export const BreakTest = () => {
    const [data, setData] = useState("");
    const registration = "ABCD"

    const [btnCss, setBtncss] = useState("btn")
    const [result, setResult] = useState("000")
    const [weight, setWeight] = useState("00.00");
    const [state, setState] = useState(false);
    const [btnStart, setBtnStart] = useState(true)
    const [disabled, setDisabled] = useState(false);
    const [breakReport, setBreakReport] = useState("00.00")
    // const [socket,setSocket]=useState(io("http://localhost:4000"))
    const handeChange = () => {
        setDisabled(true);
        console.log("yess");
    };
    const handleSubmitClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setBtncss("start")
        }, 1000);
    };
    // console.log(socket)


    // useEffect(()=>{
    //     socket.on("getUsers",(message)=>{
    //         console.log(message)
    //     })
    // })









    const handleOnClick = () => {

        fetch("http://13.235.215.173:5000/SKSS/last_update_topic_data?device_id=868715034975510",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
        "Authorization":`Bearer eyJtb2JpbGUiOiIrOTE3OTA2OTk1NzE2IiwiYWRtaW4iOjB9.fFxqS8okZ9EIOuBRIpCR65n5iQY`
            }

        }).then((res)=>res.json())
        .then((data)=>{
                   setBreakReport("98:00")
            console.log(data)
        })

        let lBreakForce = 8;
        let rBreakForce = 8.1;
        let wheelDia = .55;
        let result;
        let rightBreakEff = (0.48 * lBreakForce) / wheelDia
        let leftBreakEff = (0.48 * rBreakForce) / wheelDia
        if (rightBreakEff < leftBreakEff) {
            result = ((leftBreakEff - rightBreakEff) / leftBreakEff) * 100
        } else if (rightBreakEff > leftBreakEff) {
            result = ((rightBreakEff - leftBreakEff) / rightBreakEff) * 100
        } else {
            result = 0;
        }
        console.log(rightBreakEff)
        console.log(leftBreakEff)
        let BreakResult = ""
        if (result <= 25 && result >= 0) {
            BreakResult = "PASS"
        } else {
            BreakResult = "FAIL"
        }
        console.log(result)
        setBreakReport(BreakResult)
    }





    return (
        <>
            <Box className="breakContainer">
                <Box className="headingflex ">
                    <Box className="header3">
                        <h3 className="headingR">Break Test</h3>
                    </Box >
                    {/* <Box className="leftSide"></Box> */}
                    <Box className="imgStyle">
                        <img src='/image/carR.png' alt="car" className='imgh' />
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

                        </div>
                    </Box>
                </Box>
                {/* ..........................content ...................................... */}

                <Box className="content">
                    <Box className="heading">
                        <div className='text-danger' style={{ width: "500px" }}>Registration No : OD29E8266 </div>
                        <div className='text-danger' style={{ width: "500px" }}>Applicant Name :  Kishor Kumar </div>
                    </Box>
                </Box>

                <div className='box-container'>
                    <div style={{ width: "50%", textAlign: "right" }}>
                        <span style={{ fontSize: "40px", fontWeight: "bold", marginLeft: "20px", marginTop: "30px" }}>Weigth : </span>
                        <input style={{ padding: "30px", width: "200px", heigth: "300px" }} className="inputDetail" value={weight} />
                        <img src="https://cdn4.iconfinder.com/data/icons/weight-machine-glyph/74/Weight_Machine_Glyph-37-512.png" style={{ width: "100px", height: "100px", marginLeft: "30px" }} />
                        <br />
                        <br />
                        <br />

                        <span style={{ fontSize: "40px", fontWeight: "bold", marginLeft: "20px", marginTop: "30px" }}>Test Report : </span>
                        <input style={{ padding: "30px", width: "200px", heigth: "200px" }} className="inputDetail" value={`${breakReport}`} />
                        <img src="https://cdn-icons-png.flaticon.com/512/6331/6331692.png" style={{ width: "100px", height: "100px", marginLeft: "30px" }} />

                    </div>
                    <div style={{ width: "50%", textAlign: "center" }}>
                        {/* <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br /> */}
                        {/* <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "end", marginBottom: "15px", width: "280px", margin: "auto" }}>
                            <div style={{ width: "35px", height: "70px", background: 'black', borderRadius: "20px" }}></div>
                            <div style={{ width: "35px", height: "110px", background: 'red', borderRadius: "20px" }}></div>
                            <div style={{ width: "35px", height: "100px", background: 'blue', borderRadius: "20px" }}></div>
                            <div style={{ width: "35px", height: "90px", background: 'yellow', borderRadius: "20px" }}></div>
                        </div> */}

                        {/* <img src="https://www.freepnglogos.com/uploads/car-wheel-png/car-wheel-png-image-collection-for-download-30.png"
                            style={{ width: "50px", height: "50px", marginLeft: "7px" }} /><img src="https://www.freepnglogos.com/uploads/car-wheel-png/car-wheel-png-image-collection-for-download-30.png"
                                style={{ width: "50px", height: "50px", marginLeft: "10px" }} /><img src="https://www.freepnglogos.com/uploads/car-wheel-png/car-wheel-png-image-collection-for-download-30.png"
                                    style={{ width: "50px", height: "50px", marginLeft: "10px" }} /><img src="https://www.freepnglogos.com/uploads/car-wheel-png/car-wheel-png-image-collection-for-download-30.png"
                                        style={{ width: "50px", height: "50px", marginLeft: "10px" }} />
                        <br />
                        <br />
                        <br /> */}

                        {/* <Equalizer/> */}
                        {/* <Poll/> */}
                        <Button style={{ width: "200px", padding: "20px", background: "green", fontSize: "30px", color: "white", borderRadius: "30px", backgroundImage: "linear-gradient(#243d83, #7a99ef)" }} onClick={() => handleOnClick()}> Start</Button>


                    </div>

                </div>

            </Box>


        </>
    )
}