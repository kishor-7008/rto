import React from 'react'

export default function RtoDetails() {
  return (
    <>
    <div style={{width:"100%",height:"5vh",display:"flex",marginTop:"10px", marginLeft:'20px', justifyContent:""}}>
      <div style={{width:"600px"}}><span style={{fontWeight:"bold",fontSize:"20px"}}>Registration Number :</span> KJHY6876JH</div>
      <div  style={{width:"400px"}}> <span style={{fontWeight:"bold",fontSize:"20px"}}>RTO : </span>Alwar</div>
      <div  style={{width:"400px"}}> <span style={{fontWeight:"bold",fontSize:"20px"}}>District : </span> Bhiwadi</div>
      <div  style={{width:"400px"}}> <span style={{fontWeight:"bold",fontSize:"20px"}}>State : </span> Haryana </div>
      {/*<div  style={{width:"400px"}}>Operating Agent </div>
      <div  style={{width:"400px"}}>Date Of Calibration</div> */}
     </div><div style={{width:"100%",height:"5vh",display:"flex"}}>
      {/* <div style={{width:"400px"}}>KJHY6876JH</div>
      <div  style={{width:"400px"}}>Alwar </div>
      <div  style={{width:"400px"}}>Bhiwadi</div>
      <div  style={{width:"400px"}}>Hariyana </div> */}
      <div  style={{width:"400px" ,marginLeft:'20px'}}> <span style={{fontWeight:"bold",fontSize:"20px"}}>Operating Agent : </span> Kishor Kumar </div>
      <div  style={{width:"400px"}}> <span style={{fontWeight:"bold",fontSize:"20px"}}>Date Of Calibration : </span> 14-06-2023</div>  
      <div  style={{width:"400px"}}> <span style={{fontWeight:"bold",fontSize:"20px"}}>Validity : </span> 14-09-2023</div>  
     </div>
     
    </>
  )

}
