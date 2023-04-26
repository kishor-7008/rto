import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import '../index.css'
import { InsertEmoticon } from '@mui/icons-material';
import Home from '../home/Home';
const NonAutomated = () => {
  const navigate=useNavigate()

  const [text, setText] = useState("");

  const elementPass = <p style={{ backgroundColor: 'green', color: "green", fontWeight: "bold", fontSize: "24px" }}>P</p>
  const elementFail = <p style={{ backgroundColor: 'red', color: "red" }}>F</p>
  // applicable values
  const _11 = 90;
  const _12 = 88;
  const _13 = 87;
  const _14 = 55;
  const _15 = 68;
  const _16 = 47;
  const _17 = 72;
  const _18 = 15;
  const _19 = 45;
  const _20 = 68;

  const [formValues, setFormValues] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
    value10: '',
    value11: '',
    value12: '',
    value13: '',
    value14: '',
    value15: '',
    value16: '',
    value17: '',
    value18: '',
    value19: '',
    value20: '',
    value21: '',
  });
  const myvehicle = 'diesel'
  const [vehichle, setVehicle] = useState(false);
  const handleClick = () => {
    if (myvehicle == 'ev') {
      setVehicle(true);
    }
  };
  useEffect(() => {
    handleClick();
  }, [])
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    navigate("/report")
  };


const[result,setResult]=useState("")
  const data = [
    {
      id: 1,
      title: "Protection against electric shock.",
      rule_no: "31",
      Applicable: "90",
      Recorded: "80",
      Result: "F"
    },

    {
      id: 2,
      title: "Insulation Resistance Measurement Test.",
      rule_no: "31",
      Applicable: "90",
      Recorded: "90",
      Result:"P"
    },
    {
      id: 3,
      title: "Headlamps Assembly.",
      rule_no: "31",
      Applicable: "90",
      Recorded: "67",
      Result:"F"
    },
    {
      id: 4,
      title: "Suppressor cap/ High tension cable",
      rule_no: "31",
      Applicable: "90",
      Recorded: "60",
      Result:"F"
    },
    {
      id: 5,
      title: "Lights.",
      rule_no: "31",
      Applicable: "90",
      Recorded: "91",
      Result:"P"
    },
    {
      id: 6,
      title: "Rear view mirrors",
      rule_no: "31",
      Applicable: "90",
      Recorded: "89",
      Result:"P"
    },
    {
      id: 7,
      title: "Safety glass (Windscreen) ",
      rule_no: "31",
      Applicable: "90",
      Recorded: "87",
      Result:"P"
    },
    {
      id: 8,
      title: "Horn",
      rule_no: "31",
      Applicable: "90",
      Recorded: "89",
      Result:"P"
    },
    {
      id: 9,
      title: "Silencer",
      rule_no: "31",
      Applicable: "90",
      Recorded: "94",
      Result:"F"
    },
    {
      id: 10,
      title: "indscreen wiper blades",
      rule_no: "31",
      Applicable: "90",
      Recorded: "87",
      Result:"P"
    },
    {
      id: 11,
      title: "Windscreen wiper system",
      rule_no: "31",
      Applicable: "90",
      Recorded: "45",
      Result:"F"
    },
    {
      id: 12,
      title: "Dashboard equipment",
      rule_no: "31",
      Applicable: "90",
      Recorded: "90",
      Result:"P"
    },

    {
      id: 13,
      title: "Rear under run protection device",
      rule_no: "31",
      Applicable: "90",
      Recorded: "78",
      Result:"P"
    },
    {
      id: 14,
      title: "Lateral under run protection device",
      rule_no: "31",
      Applicable: "90",
      Recorded: "89",
      Result:"P"
    },
    {
      id: 15,
      title: "FASTag ",
      rule_no: "31",
      Applicable: "90",
      Recorded: "78",
      Result:"P"
    },

    {
      id: 16,
      title: "Priority Seats,Signs,securing of canes/ crutches/walker, handrail/stanchions",
      rule_no: "31",
      Applicable: "90",
      Recorded: "90",
      Result:"P"
    },

    {
      id: 17,
      title: "Wheel-chair arrangements for differently abled passengers and passengers with reduced mobility",
      rule_no: "31",
      Applicable: "90",
      Recorded: "89",
      Result:"P"
    },
    {
      id: 18,
      title: "Vehicle Location Tracking (VLT) Device",
      rule_no: "31",
      Applicable: "90",
      Recorded: "34",
      Result:"F"
    },
    {
      id: 19,
      title: "High Security Registration Plate (HSRP)",
      rule_no: "31",
      Applicable: "90",
      Recorded: "89",
      Result:"P"
    },
    {
      id: 20,
      title: "Battery.",
      rule_no: "31",
      Applicable: "90",
      Recorded: "78",
      Result:"P"
    },
    {
      id: 21,
      title: "Safety belt (Seatbelt)",
      rule_no: "31",
      Applicable: "90",
      Recorded: "98",
      Result:"P"
    },
    {
      id: 22,
      title: "Spray Suppression Devices ",
      rule_no: "31",
      Applicable: "90",
      Recorded: "87",
      Result:"P"
    },
    {
      id: 23,
      title: "yres",
      rule_no: "31",
      Applicable: "90",
      Recorded: "87",
      Result:"P"
    },
    {
      id: 24,
      title: "Retro- Reflector and reflective tapes",
      rule_no: "31",
      Applicable: "90",
      Recorded: "78",
      Result:"P"
    },
    {
      id: 25,
      title: "State of Charge (SOC) Indicator on Dashboard (for electric vehicles)",
      rule_no: "31",
      Applicable: "90",
      Recorded: "44",
      Result:"F"
    },
    {
      id: 26,
      title: "Malfunction Indicator Lamp - MIL",
      rule_no: "31",
      Applicable: "90",
      Recorded: "89",
      Result:"P"
    },
    {
      id: 27,
      title: " Exhaust Noise Test",
      rule_no: "31",
      Applicable: "90",
      Recorded: "90",
      Result:"P"
    }

  ]
  console.log("data", data)

  const handleInputChange = (data) => {
   console.log(data)
  };
  return (
<><Home/>
    <div className='main-container d-flex flex-column' style={{ backgroundColor: "white", width: "90%", margin: "auto" }}>
      <div className='header'>
        <div className='head'>
          <h1 className='headtext' style={{ padding: "20px" }}>Non Automated Test</h1>
        </div>
      </div >
      <div className='section container-fluid' >
        <div style={{ backgroundColor: "blue" }} className='row d-flex justify-content-center align-items-center pt-3'>
          <div className='col-1 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>SI. NO.</p></div>
          <div className='col-3 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Name of Test</p></div>
          <div className='col-2 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>As Per rule 189 Table D</p></div>
          <div className='col-1 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Applicable</p></div>
          <div className='col-3 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Recorded Value / Observation</p></div>
          <div className='col-2 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Result</p></div>
        </div>
        <div className='row d-flex align-items-center'>
          <div className='col-12'>
            {data.map((value, index) =>
            (<>
              <div className='row p-2' key={value.id}>
                <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{value.id}</p></div>
                <div style={{ backgroundColor: '#e6e6fa', fontWeight: "bold", color: "black" }} className='col-3 p-1 fs-5'><p style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>{value.title}</p></div>
                <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{value.rule_no}</p></div>
                <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{value.Applicable}</p></div>
                <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5,fontWeight:"bold" }} placeholder='Enter value here...' type="text" value={value.Recorded} onChange={(e)=>setResult(e.target.value)} disabled={vehichle} /></div>
                {value.Result=="P" ? <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "green", fontSize: "20px",fontWeight:"bold" }}>{value.Result}</p></div>:<div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "red", fontSize: "20px",fontWeight:"bold" }}>{value.Result}</p></div>}
                
              </div>
            </>))}

            {/* <div className='row p-2' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }} >
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>2</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>Insulation Resistance Measurement Test.</p ></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }} >32</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>88</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value2" value={formValues.value2} onChange={handleInputChange} disabled={vehichle} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{formValues.value2 === '' ? "..." : _12 > parseInt(formValues.value2) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>3</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>Headlamps Assembly</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>2</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>87</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value3" value={formValues.value3} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{formValues.value3 === '' ? "..." : _13 > parseInt(formValues.value3) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>4</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>Suppressor cap/ High tension cable</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>4</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>55</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value4" value={formValues.value4} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{formValues.value4 === '' ? "..." : _14 > parseInt(formValues.value4) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>5</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>Rear view mirrors</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>5</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>68</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value5" value={formValues.value5} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{formValues.value5 === '' ? "..." : _15 > parseInt(formValues.value5) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>6</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5' ><p style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>Silencer</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>8(a)</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>47</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value6" value={formValues.value6} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5' style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}>{formValues.value6 === '' ? "..." : _16 > parseInt(formValues.value6) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>7</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Indscreen wiper system</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>9(a)</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>72</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value7" value={formValues.value7} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value7 === '' ? "..." : _17 > parseInt(formValues.value7) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>8</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Dashboard equipment</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>10</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>15</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value8" value={formValues.value8} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value8 === '' ? "..." : _18 > parseInt(formValues.value8) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>9</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Rear under run protection device (RUPD) (For N2, N3, T3 and T4)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>18</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>45</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value9" value={formValues.value9} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value9 === '' ? "..." : _19 > parseInt(formValues.value9) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>10</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Lateral under run protection device (LUPD) (For N2, N3, T3 and T4)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>19</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>68</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value10" value={formValues.value10} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value10 === '' ? "..." : _20 > parseInt(formValues.value10) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>11</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Priority Seats,Signs,securing of canes/crutches/walker, handrail/stanchions, controls at priority seats for differently abled passengers and passengers with reduced mobility (Only for buses)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>21</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value11" value={formValues.value11} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value11 === '' ? "..." : _20 > parseInt(formValues.value11) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>12</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Wheel-chair arrangements for differently abled passengers and passengers with reduced mobility (Only for buses)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>22</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value12" value={formValues.value12} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value12 === '' ? "..." : _20 > parseInt(formValues.value12) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>13</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Vehicle Location Tracking (VLT) Device</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>23</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value13" value={formValues.value13} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value13 === '' ? "..." : _20 > parseInt(formValues.value13) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>14</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>High Security Registration Plate (HSRP)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>24</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value14" value={formValues.value14} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value14 === '' ? "..." : _20 > parseInt(formValues.value14) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>15</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Battery </p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>25</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value15" value={formValues.value15} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value15 === '' ? "..." : _20 > parseInt(formValues.value15) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>16</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Safety belt (Seatbelt)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>26</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value16" value={formValues.value16} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value16 === '' ? "..." : _20 > parseInt(formValues.value16) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>17</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Spray Suppression Devices (For all N,T3
                and T4)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>28</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value17" value={formValues.value17} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value17 === '' ? "..." : _20 > parseInt(formValues.value17) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>18</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Tyres</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>29</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value18" value={formValues.value18} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value18 === '' ? "..." : _20 > parseInt(formValues.value18) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>19</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>State of Charge (SOC) Indicator on Dashboard (for electric vehicles)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>33</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value19" value={formValues.value19} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value19 === '' ? "..." : _20 > parseInt(formValues.value19) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>20</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Malfunction Indicator Lamp - MIL (part of OBD Scan Tool)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>39</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value20" value={formValues.value20} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value20 === '' ? "..." : _20 > parseInt(formValues.value20) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div>
            <div className='row p-2'>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>21</p></div>
              <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Exhaust Noise Test (dB)</p></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>8(b)</p></div>
              <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
              <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value21" value={formValues.value21} onChange={handleInputChange} /></div>
              <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value21 === '' ? "..." : _20 > parseInt(formValues.value21) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
            </div> */}
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit here</button>
    </div >
    </>
  )
}

export default NonAutomated
