import React from 'react'
// import LeftSider from './LeftSider'
// import Home from './Home'
import './calibration.css'
import Home from '../home/Home'

export default function Calibration() {

    let tableData=[
        {slNo:"1",name:"Roller Brake Tester",id:"0",friquency:"0",Date:"0"},
        {slNo:"2",name:"Equipment Of Axle WeightMeasurement",id:"0",friquency:"0",Date:"0"},
        {slNo:"3",name:"Suspension Tester",id:"0",friquency:"0",Date:"0"},
        {slNo:"4",name:"Side Slip Tester",id:"0",friquency:"0",Date:"0"},
        {slNo:"5",name:"Joint Play Tester",id:"0",friquency:"0",Date:"0"},
        {slNo:"6",name:"Electronic Steering Gear Play Detector",id:"0",friquency:"0",Date:"0"},
        {slNo:"7",name:"Headlight Tester(Semiautomatic / fully automatic)",id:"0",friquency:"0",Date:"0"},
        {slNo:"8",name:"Opacimeter / Smoke meter",id:"0",friquency:"0",Date:"0"},
        {slNo:"9",name:"Exhaust Gas Analyzer",id:"0",friquency:"0",Date:"0"},
        {slNo:"10",name:"Speedometer/ Speed Governor Tester",id:"0",friquency:"0",Date:"0"},
        {slNo:"11",name:"Sound level meter",id:"0",friquency:"0",Date:"0"},
        {slNo:"12",name:"Test fingers",id:"0",friquency:"0",Date:"0"},
        {slNo:"13",name:"Insulation Tester",id:"0",friquency:"0",Date:"0"},
        {slNo:"14",name:"Malfunction Indicator Lamp- MIL (part of OBD Scan Tool)",id:"0",friquency:"0",Date:"0"},
    ]
    return (
        <>
        <Home/>
            <table class="table table-hover mx-auto my-5 col-6 j" >
                <thead>
                    <tr>
                        <th scope="col"  align="center"  className='m-auto'>Sl No.</th>
                        <th scope="col"  align="center"  >Name Of Equipment</th>
                        <th scope="col"  align="center" >ID. No.</th>
                        <th scope="col">Calibration <br/>Frequency</th>
                        <th scope="col">Date Of<br/> Last Calibration</th>
                    </tr>
                </thead>
                <tbody>
                     {tableData && tableData.map((item,index)=>{
                        return(
                            <>
                            <tr class="d-none d-md-table-row option" key={index}>
                            <td >{item.slNo}</td>
                            <td>{item.name}</td>
                            <td >{item.id}</td>
                            <td >{item.friquency}</td>
                            <td data-label="Delete Record">
                               <input style={{width:"100px"}} value={item.data}/>
                            </td>
                        </tr>
                            
                            </>
                           
                        )
                     })}
                      <tr class="d-none d-md-table-row option" style={{background:"blue"}}>
                                <td colSpan="5" align="center" style={{"letterSpacing":"5px",fontWeight:"bold",color:"white"}}> Calibration Report </td>
                                </tr>
                    
                   {/* <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr> <tr class="d-none d-md-table-row option">
                        <th scope="row" data-label="Type">301</th>
                        <th scope="row" data-label="Type">301</th>
                        <td data-label="Old Permalink">XX</td>
                        <td data-label="New Permalink">XX</td>
                        <td align="center" data-label="Delete Record">
                            <button name="delete0" value="19" class="btn btn-danger grmlt-js-btn">Delete</button>
                        </td>
                    </tr>
                    
                   */}
                   
                </tbody>
            </table>
        </>

    )
}
