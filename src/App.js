import Login from "./component/Login"
import Register from './home/Register'
import Calibration from "./component/Calibration"
import Profile from "./home/Profile"
import Report from './report/Report'
// import Automated from './component/Automated'
import NonAutomated from './nonautomataed/NonAutomated'
import Logout from "./component/Logout"
import Setting from './component/Setting'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./home/Home"
import Connect from "./component/Connect"
import LeftSider from "./component/LeftSider"
import Dashboard from "./component/Dashboard"
import VehicleDetails from "./home/VehicleDetails"
import Chart from "./component/Chart"
import Footer from "./component/Footer"
import { CheckVehicle } from "./component/CheckVehicle"
import Test from "./component/Test"
import { BreakTest } from "./component/BreakTest"
// import { SideSleep } from "./component/SideSleep"
import { SpeedTest } from "./component/SpeedTest"
import { SideSlip } from "./component/SideSlip"
import { Speedo } from "./component/Speedometer"
import { HeadLampTest } from "./component/HeadLampTest"
import { SuspentionTest } from "./component/SuspentionTest"
import { VisualInspaectio } from "./component/VisualInspection"
// import Equalizer from "./component/Equlizer"
// import { Break } from "./component/Break"
import SpeedoMeter2 from "./component/SpeedoMeter2"
import Speed from "./component/Speed"
import  BarChart  from "./component/BarChart"
import Stage from "./nonautomataed/Stage"
import Stage1 from "./nonautomataed/Stage1"
import Stage2 from "./nonautomataed/Stage2"
import Stage3 from "./nonautomataed/Stage3"
import SparkPlug from "./nonautomataed/stage1/SparkPlug"
import SuppressorCap from "./nonautomataed/stage1/SuppressorCap"
import HtCable from "./nonautomataed/stage1/HtCable"
import RearView from "./nonautomataed/stage1/RearView"
import SideMirror from "./nonautomataed/stage1/SideMirror"
import SafetyGlass from "./nonautomataed/stage1/SafetyGlass"
import Horn from "./nonautomataed/stage1/Horn"
import DashboardEquipment from "./nonautomataed/stage1/DashboardEquipment"
import WaringLight from "./nonautomataed/stage1/WaringLight"
import Windscreen from "./nonautomataed/stage1/Windscreen"
import FogLamp from "./nonautomataed/stage2/FogLamps"
import DirectionIndicator from "./nonautomataed/stage2/DirectionIndicator"
import Hazards from "./nonautomataed/stage2/Hazards"
import ParkingLight from "./nonautomataed/stage2/ParkingLight"
import StopLight from "./nonautomataed/stage2/StopLight"
import NumberPlate from "./nonautomataed/stage2/NumberPlate"
import BodyOutlining from "./nonautomataed/stage2/BodyOutlining"
import TopLight from "./nonautomataed/stage2/TopLight"
import SpeedometerSld from "./nonautomataed/stage2/SpeedometerSld"
import StreeingGear from "./nonautomataed/stage3/SteeringGear"
import StreeingPlay from "./nonautomataed/stage3/StreeingPlay"
import BrakingSystem from "./nonautomataed/stage3/BrakingSystem"
import Emission from "./nonautomataed/stage3/Emission"
import Silencer from "./nonautomataed/stage3/Silencer"
import Reflector from "./nonautomataed/stage3/Reflector"
import ReflectiveTape from "./nonautomataed/stage3/ReflectiveTape"
import HeadLampBulb from "./nonautomataed/stage3/HeadLampBulb"
import HeadLamps from "./nonautomataed/stage3/HeadLamps"

export default function App() {
  return (
   <BrowserRouter>
   {/* <Home/> */}
   {/* <div className="main-container">
    <LeftSider/> */}
   <Routes>
   <Route path='/rto' element={<Login/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/breaktest' element={<BreakTest/>}/>
   <Route path='/nonautomated' element={<NonAutomated/>}/>
   <Route path='/report' element={<Report/>}/>
   <Route path='/calibration' element={<Calibration/>}/>
   <Route path='/logout' element={<Logout/>}/>
   <Route path='/setting' element={<Setting/>}/>
   <Route path='/vehicle/details/:regNum' element={<VehicleDetails/>}/>
   <Route path='/footer' element={<Footer/>}/>
   <Route path='/check/vehicle' element={<CheckVehicle/>}/>
   <Route path='/test' element={<Test/>}/>
   <Route path='/dashboard' element={<Dashboard/>}/>
   <Route path='/break/test' element={<Speed/>}/>
   <Route path='/side/slip' element={<SideSlip/>}/>
   <Route path='/speed/test' element={<SpeedTest/>}/>
   {/* <Route path='/speed' element={<Break/>}/> */}
   <Route path='/head/lamp/test' element={<HeadLampTest/>}/>
   <Route path='/suspention' element={<SuspentionTest/>}/>
   <Route path='/visual' element={<VisualInspaectio/>}/>
   <Route path='/*' element={<><h2>Error</h2></>}/>
   <Route path='/break' element={<Speed/>}/>
   <Route path='/chart' element={<BarChart/>}/>
   <Route path='/stage' element={<Stage/>}/>
   <Route path='/stage1' element={<Stage1/>}/>
   <Route path='/stage2' element={<Stage2/>}/>
   <Route path='/stage3' element={<Stage3/>}/>
   <Route path='/SparkPlug' element={<SparkPlug/>}/>
   <Route path='/SuppressorCap' element={<SuppressorCap/>}/>
   <Route path='/Htcable' element={<HtCable/>}/>
   <Route path='/RearView' element={<RearView/>}/>
   <Route path='/sideMirror' element={<SideMirror/>}/>
   <Route path='/safetyGlass' element={<SafetyGlass/>}/>
   <Route path='/horn' element={<Horn/>}/>
   <Route path='/dashboardEquipment' element={<DashboardEquipment/>}/>
   <Route path='/warningLight' element={<WaringLight/>}/>
   <Route path='/windScreen' element={<Windscreen/>}/>
   <Route path='/fogLamp' element={<FogLamp/>}/>
   <Route path='/directionIndicator' element={<DirectionIndicator/>}/>
   <Route path='/hazard' element={<Hazards/>}/>
   <Route path='/parkingLight' element={<ParkingLight/>}/>
   <Route path='/stopLight' element={<StopLight/>}/>
   <Route path='/numberPlate' element={<NumberPlate/>}/>
   <Route path='/bodyOutlining' element={<BodyOutlining/>}/>
   <Route path='/topLight' element={<TopLight/>}/>
   <Route path='/spedometerSld' element={<SpeedometerSld/>}/>
   <Route path='/streeingGear' element={<StreeingGear/>}/>
   <Route path='/streeingPlay' element={<StreeingPlay/>}/>
   <Route path='/brakeSystem' element={<BrakingSystem/>}/>
   <Route path='/emission' element={<Emission/>}/>
   <Route path='/silencer' element={<Silencer/>}/>
   <Route path='/reflector' element={<Reflector/>}/>
   <Route path='/reflectiveTape' element={<ReflectiveTape/>}/>
   <Route path='/headLampBulb' element={<HeadLampBulb/>}/>
   <Route path='/headLamps' element={<HeadLamps/>}/>
   



   </Routes>
   {/* </div> */}
   {/* <Footer/> */}
   
   </BrowserRouter>
    
  )
}
 