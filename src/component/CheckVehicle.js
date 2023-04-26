import React, { useState } from 'react';
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button
} from '@mui/material';
import { Box } from '@mui/system';
import { Label, Navigation } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import "./vehicle.css"
import { useNavigate } from 'react-router-dom';
export const CheckVehicle = () => {
    const navigate = useNavigate();

    // https://i.pinimg.com/originals/b5/35/03/b535039696d71c1f4f13c9036d6c2712.gif
    const [input, setInput] = useState("");
    const [styleD, setStyleD] = useState("button")
    const handleSubmitBtn = (event) => {
        event.preventDefault();
        setStyleD(styleD + " " + "animate")
        // setStyleD(styleD)
      
        // console.log("event");
        setTimeout(() => {
            setStyleD("button");
            
            navigate("/test")
        }, 1000);
    }


    return (
        <Box style={{backgroundColor:"red"}} >
            <Paper className="vehicleNumberContainer">
                <img src="https://i.gifer.com/origin/00/0001658e20511099e8c3f3387c61efcc_w200.gif" style={{width:"300px",height:"150px"}}/>
                <h3>Enter Vehicle Number</h3>
                <input className={"inputBox3"} placeholder="Enter Vehicle Number...." />
                <button className={styleD} onClick={handleSubmitBtn}>Proceed Now </button>
            </Paper>
        </Box>
    );
};