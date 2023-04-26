import React, { useEffect, useState } from 'react'
import '../index.css'
const Nonauto1 = () => {
    const elementPass = <p style={{ backgroundColor: 'green' }}>Pass</p>
    const elementFail = <p style={{ backgroundColor: 'red' }}>Failed</p>
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
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues(({ ...formValues, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(typeof formValues.value5)
        console.log(formValues);
    };
    return (
        <div className='main-container'>
            <div className='header'>
                <div className='head'>
                    <h1 className='headtext'>Non Automated Test</h1>
                </div>
            </div >
            <div className='section container-fluid'>
                <div style={{ backgroundColor: '#87cefa' }} className='row d-flex justify-content-center align-items-center pt-3'>
                    <div className='col-1 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>SI. NO.</p></div>
                    <div className='col-3 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Name of Test</p></div>
                    <div className='col-2 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>As Per rule 189 Table D</p></div>
                    <div className='col-1 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Applicable</p></div>
                    <div className='col-3 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Recorded Value / Observation</p></div>
                    <div className='col-2 d-flex align-items-center justify-content-center'><p className='fs-5 fw-bold'>Result</p></div>
                </div>
                <div className='row d-flex align-items-center'>
                    <div className='col-12'>
                    <div className='row p-2'>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>1</p></div>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Protection against electric shock.</p></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>31</p></div>
                            <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>90</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value1" value={formValues.value1} onChange={handleInputChange} disabled={vehichle} /></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value1 === '' ? "..." : _11 > parseInt(formValues.value1) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
                        </div>
                        <div className='row p-2'>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>2</p></div>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Insulation Resistance Measurement Test.</p></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>32</p></div>
                            <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>88</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value2" value={formValues.value2} onChange={handleInputChange} disabled={vehichle} /></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value2 === '' ? "..." : _12 > parseInt(formValues.value2) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
                        </div>
                        <div className='row p-2'>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>3</p></div>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Headlamps Assembly</p></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>2</p></div>
                            <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>87</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value3" value={formValues.value3} onChange={handleInputChange} /></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value3 === '' ? "..." : _13 > parseInt(formValues.value3) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
                        </div>
                        <div className='row p-2'>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>4</p></div>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Suppressor cap/ High tension cable</p></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>4</p></div>
                            <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>55</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value4" value={formValues.value4} onChange={handleInputChange} /></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value4 === '' ? "..." : _14 > parseInt(formValues.value4) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
                        </div>
                        <div className='row p-2'>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>5</p></div>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Rear view mirrors</p></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>5</p></div>
                            <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>68</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value5" value={formValues.value5} onChange={handleInputChange} /></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value5 === '' ? "..." : _15 > parseInt(formValues.value5) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
                        </div>
                        <div className='row p-2'>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-1 d-flex justify-content-center align-items-center p-1 fs-5 fw-bold'><p>6</p></div>
                            <div style={{ backgroundColor: '#e6e6fa' }} className='col-3 p-1 fs-5'><p>Silencer</p></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>8(a)</p></div>
                            <div className='col-1 d-flex justify-content-center align-items-center'><p className='fs-5'>47</p></div>
                            <div className='col-3 d-flex justify-content-center align-items-center'><input style={{ height: 40, borderRadius: 5 }} placeholder='Enter value here...' type="text" name="value6" value={formValues.value6} onChange={handleInputChange} /></div>
                            <div className='col-2 d-flex justify-content-center align-items-center'><p className='fs-5'>{formValues.value6 === '' ? "..." : _16 > parseInt(formValues.value6) ? `${elementPass.props.children}` : `${elementFail.props.children}`}</p></div>
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
                        </div>
                    </div>    
                </div>
            </div>
            <button onClick={handleSubmit}>Sumit here</button>
        </div >
    )
}

export default Nonauto1
