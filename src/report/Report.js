import React from 'react'
// import Home from './Home'
// import Home from '../component/Home'
import { Link } from 'react-router-dom'
import Home from '../home/Home'
export default function Report() {


    let testingCenter = [{
        Regno: "UHGFF67676",
        rto: "Alwar",
        district: "Bhiwadi",
        state: "Hariyana",
        OperatingAgent: "KIshor Kumar",
        TestNo: "34",
        DateOfTest: "23:09:2023",
        Time: "09:56",
        testStatus: "1st"
    }]
    let VehicleDetails = [
        {
            regNo: "0D29E8266", class: "Car", make: "", model: "", EngineNum: "", ChassisNum: "", fuelType: "", emissionNorms: "", speeDg: "", gvw: "", mfg: ""
        }
    ]
    const NonAutomated = [
        {
            id: 1,
            title: "Protection against electric shock.",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },

        {
            id: 2,
            title: "Insulation Resistance Measurement Test.",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 3,
            title: "Headlamps Assembly.",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 4,
            title: "Suppressor cap/ High tension cable",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
        },
        {
            id: 5,
            title: "Lights.",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 6,
            title: "Rear view mirrors",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 7,
            title: "Safety glass (Windscreen) ",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 8,
            title: "Horn",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 9,
            title: "Silencer",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 10,
            title: "indscreen wiper blades",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
        },
        {
            id: 11,
            title: "Windscreen wiper system",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 12,
            title: "Dashboard equipment",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },

        {
            id: 13,
            title: "Rear under run protection device",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 14,
            title: "Lateral under run protection device",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 15,
            title: "FASTag ",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },

        {
            id: 16,
            title: "Priority Seats,Signs,securing of canes/ crutches/walker, handrail/stanchions",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },

        {
            id: 17,
            title: "Wheel-chair arrangements for differently abled passengers and passengers with reduced mobility",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 18,
            title: "Vehicle Location Tracking (VLT) Device",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 19,
            title: "High Security Registration Plate (HSRP)",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 20,
            title: "Battery.",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 21,
            title: "Safety belt (Seatbelt)",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 22,
            title: "Spray Suppression Devices ",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 23,
            title: "yres",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 24,
            title: "Retro- Reflector and reflective tapes",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 25,
            title: "State of Charge (SOC) Indicator on Dashboard (for electric vehicles)",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 26,
            title: "Malfunction Indicator Lamp - MIL",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        },
        {
            id: 27,
            title: " Exhaust Noise Test",
            rule_no: "31",
            Applicable: "90",
            Recorded: "",
            Result: ""
        }

    ]

    //   const automated=[
    //     {
    //     slNUm:"1",
    //     name:'Left headlamp dipped beam vertical deviation (%)',
    //     rule:"45",
    //     Applicable:"45",
    //     Recorded:"67",
    //     Result:"F"
    //     },
    //   ]
    let calibration = [
        { slNo: "1", name: "Roller Brake Tester", id: "0", friquency: "0", Date: "0" },
        { slNo: "2", name: "Equipment Of Axle WeightMeasurement", id: "0", friquency: "0", Date: "0" },
        { slNo: "3", name: "Suspension Tester", id: "0", friquency: "0", Date: "0" },
        { slNo: "4", name: "Side Slip Tester", id: "0", friquency: "0", Date: "0" },
        { slNo: "5", name: "Joint Play Tester", id: "0", friquency: "0", Date: "0" },
        { slNo: "6", name: "Electronic Steering Gear Play Detector", id: "0", friquency: "0", Date: "0" },
        { slNo: "7", name: "Headlight Tester(Semiautomatic / fully automatic)", id: "0", friquency: "0", Date: "0" },
        { slNo: "8", name: "Opacimeter / Smoke meter", id: "0", friquency: "0", Date: "0" },
        { slNo: "9", name: "Exhaust Gas Analyzer", id: "0", friquency: "0", Date: "0" },
        { slNo: "10", name: "Speedometer/ Speed Governor Tester", id: "0", friquency: "0", Date: "0" },
        { slNo: "11", name: "Sound level meter", id: "0", friquency: "0", Date: "0" },
        { slNo: "12", name: "Test fingers", id: "0", friquency: "0", Date: "0" },
        { slNo: "13", name: "Insulation Tester", id: "0", friquency: "0", Date: "0" },
        { slNo: "14", name: "Malfunction Indicator Lamp- MIL (part of OBD Scan Tool)", id: "0", friquency: "0", Date: "0" },
    ]
    return (
        <><Home/>

            <table className="table" style={{ width: "90%", margin: "auto", marginTop: "30px", marginBottom: "30px" }}>

                <thead className="thead-dark">
                    <tr>
                        <th colSpan={11} rowSpan={2} style={{ background: "blue", color: "white", textAlign: "center", fontSize: "20px" }}>Genaral Details Of Automated Testing Station</th>
                    </tr>

                </thead>
                <tr>
                    <th scope="col">Registration Number</th>
                    <th scope="col">RTO</th>
                    <th scope="col">District</th>
                    <th scope="col">State</th>
                    <th scope="col" colSpan={3}>Operating Agent</th>
                    <th scope="col">Test Number</th>
                    <th scope="col">Date Of Test</th>
                    <th scope="col">Time Of Test</th>
                    <th scope="col">Status Of Test</th>
                </tr>
                <tbody>
                    {testingCenter && testingCenter.map((item, index) => {
                        return (
                            <>
                                <tr>
                                    <td >{item.Regno}</td>
                                    <td>{item.rto}</td>
                                    <td>{item.district}</td>
                                    <td>{item.state}</td>
                                    <td colSpan={3}>{item.OperatingAgent}</td>
                                    <td >{item.TestNo}</td>
                                    <td >{item.DateOfTest}</td>
                                    <td >{item.Time}</td>
                                    <td >{item.testStatus}</td>
                                </tr>
                            </>
                        )
                    })}
                    <tr>
                        <th colSpan={6}>Due Date Of Fiteness Test / Retest</th>
                        <td colSpan={5}>12 : 07 : 2023</td>
                    </tr>
                    <tr>
                        <th scope="col">Registration Number</th>
                        <th scope="col">Vehicle Class</th>
                        <th scope="col">Make</th>
                        <th scope="col">Model</th>
                        <th scope="col">Engine No.</th>
                        <th scope="col">Chassis No.</th>
                        <th scope="col">Fuel Type</th>
                        <th scope="col">Emission Norms</th>
                        <th scope="col">Speed Governor Number (If Any)</th>
                        <th scope="col">Gvw (kg)</th>
                        <th scope="col">Year Of mfg</th>

                    </tr>
                    {VehicleDetails && VehicleDetails.map((item) => (
                        <tr>
                            <td>{item.regNo}</td>
                            <td>{item.class}</td>
                            <td>{item.make}</td>
                            <td>{item.model}</td>
                            <td>{item.EngineNum}</td>
                            <td>{item.ChassisNum}</td>
                            <td>{item.fuelType}</td>
                            <td>{item.emissionNorms}</td>
                            <td>{item.speeDg}</td>
                            <td>{item.gvw}</td>
                            <td>{item.mfg}</td>
                        </tr>
                    ))}
                    <tr>
                        <th className='m-auto'>Sl No.</th>
                        <th colSpan={4}>Name Of Equipment</th>
                        <th colSpan={2}>ID. No.</th>
                        <th colSpan={2}>Calibration Friquency</th>
                        <th colSpan={2}>Date Of LastCalibration</th>
                    </tr>
                    {calibration && calibration.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td >{item.slNo}</td>
                                    <td colSpan={4}>{item.name}</td>
                                    <td colSpan={2}>{item.id}</td>
                                    <td colSpan={2}>{item.friquency}</td>
                                    <td colSpan={2}>{item.Date}</td>
                                </tr>
                            </>
                        )
                    })}
                    <tr>

                        <th>Sl NO.</th>
                        <th colSpan={6}>Name Of Test</th>
                        <th>As Per rule 189 Table D</th>
                        <th>Applicable</th>
                        <th>Recorded Value / Observation</th>
                        <th>Result</th>
                    </tr>

                    <tr>
                        <th colSpan={11}>Part A : Automated Tests - Defining ELV or Fiteness</th>
                    </tr>
                    <tr>
                        <td rowSpan={2} style={{ alignContent: "center" }}>1</td>
                        <td>(a)</td>
                        <td colSpan={5}>Left headlamp dipped beam vertical deviation (%) </td>
                        <td>1 (a)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>

                        <td>(b)</td>
                        <td colSpan={5}>Right headlamp dipped beam vertical deviation (%) </td>
                        <td>1 (b)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td rowSpan={5} style={{ alignContent: "center" }}>1</td>
                        <td>(a)</td>
                        <td colSpan={5}>Exhaust gas emission - CO%</td>
                        <td>1 (a)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>

                        <td>(b)</td>
                        <td colSpan={5}>Exhaust gas emission - HC (ppm) </td>
                        <td>1 (b)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>

                        <td>(c)</td>
                        <td colSpan={5}>Exhaust gas emission (High idle emission) - CO% </td>
                        <td>1 (c)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr>

                        <td>(d)</td>
                        <td colSpan={5}>Exhaust gas emission (High idle emission) - Lambda ʎ </td>
                        <td>1 (d)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr>

                        <td>(e)</td>
                        <td colSpan={5}>Smoke density (m-1) </td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>


                    <tr>
                        <td colSpan={2}>4</td>

                        <td colSpan={5}>Steering gear free play (degrees)
                        </td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>


                    <tr>
                        <th colSpan={11}>Part B: Automated Tests - Defining Fitness</th>
                    </tr>

                    <tr>
                        <td colSpan={2}>5</td>

                        <td colSpan={5}>Speed Governor</td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <th colSpan={11}>Part C: Automated Tests - Additional information about health of the vehicle
                        </th>
                    </tr>
                    <tr>
                        <td colSpan={2}>6</td>

                        <td colSpan={5}>Side Slip Test </td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr>
                        <td colSpan={2}>7</td>

                        <td colSpan={5}>Suspension Test </td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr>
                        <td colSpan={2}>8</td>

                        <td colSpan={5}>Joint Play Test</td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr>
                        <td colSpan={2}>9</td>

                        <td colSpan={5}>Parking Brake efficiency (%)  </td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr>
                        <td colSpan={2}>10</td>

                        <td colSpan={5}>Speedometer Test</td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr></tr><tr>
                        <td colSpan={2}>3</td>

                        <td colSpan={5}>Service brake efficiency (%) </td>
                        <td>1 (e)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr><tr></tr>


                    <tr>



                        <th>Sl NO.</th>
                        <th colSpan={6}>Name Of Test</th>
                        <th>As Per rule 189 Table D</th>
                        <th>Applicable</th>
                        <th>Recorded Value / Observation</th>
                        <th>Result</th>
                    </tr>


                    {NonAutomated && NonAutomated.map((item, index) =>
                    (
                        <tr>
                            <td>{item.id}</td>
                            <td colSpan={6}>{item.title}</td>
                            <td>{item.rule_no}</td>
                            <td>{item.Applicable}</td>
                            <td>{item.Recorded}</td>
                            <td>{item.Result}</td>
                        </tr>
                    )
                    )}
                    <tr>
                        <th colSpan={11} rowSpan={2} style={{ background: "blue", color: "white", textAlign: "center" }}>Test Report </th>
                    </tr>
                </tbody>
            </table>
            <div style={{ width: "80%", margin: "auto", height: "400px" }}>
            <h1>Final Result</h1>
                <div style={{margin:"50px",fontWeight:"bold",border:"1px solid black",padding:"30px 0 30px 0"}}>
                   
                   
                    <div style={{padding:"5px",textAlign:"center"}}> Registration Number : OD29E8266 </div>
                    <div style={{padding:"5px",textAlign:"center"}}>Applicant Name : Kishor Kumar Ghadei</div>
                    <div style={{padding:"5px",textAlign:"center"}}>Email Id : kishor@hminnovance.com</div>
                    <div style={{padding:"5px",textAlign:"center"}} >Phone Number : 7008774494</div>
                    <div style={{padding:"5px",textAlign:"center"}}>Test  Result : Pass</div>
                </div>
            </div>
<Link  to="/dashboard"><button style={{ marginLeft: "600px" }}>submit</button></Link>
            
        </>
    )
}
