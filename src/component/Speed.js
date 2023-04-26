import React, { useState } from 'react'
import SpeedometerPage from './SpeedometerPage';
export default function Speed() {
  const [speedValue1, setSpeedValue1] = useState(300);
  const [speedValue2, setSpeedValue2] = useState(325);

  const handleClick = () => {
    console.log(`Speedometer 1 value: ${speedValue1}`);
    console.log(`Speedometer 2 value: ${speedValue2}`);
  }
  return (
    <>
    
      <div style={{background:"black",width:"100%",height:"100vh",paddingTop:"50px"}}>
        <h1 style={{fontSize:"40px",color:"white"}}>Brake Test</h1>
      <div className='flex justify-evenly'>
        <SpeedometerPage value={speedValue1} setValue={setSpeedValue1} />
        <div>
        <div style={{border:"4px solid white",width:"210px" ,margin:"auto",borderRadius:"20px",marginBottom:"10px"}}>
          <div style={{ marginBottom: "10px", width: "200px", height: "4vh", color: "white", textAlign: "center", background: "black", borderRadius: "10px" ,fontSize:"20px",fontWeight:"bold"}}>Difference</div>
         
          <div style={{ width: "200px", height: "10vh", color: "white", fontSize: "50px", textAlign: "center", background: "black", borderRadius: "10px" }}>25 %</div>

        </div>
        <div style={{ width: "80px", height: "200px", background: "blue", marginTop: "50px" ,margin:"auto"}}>
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        <div style={{ width: "100%", height: "18px", background: "black",marginBottom:"2px"}}></div>
                        <div style={{ width: "100%", height: "18px", background: "green",marginBottom:"2px",textAlign:"center",fontSize:"15px",color:"white",fontWeight:"bold"}}>25</div>
                        <div style={{ width: "100%", height: "18px", background: "green",marginBottom:"2px",textAlign:"center",fontSize:"15px",color:"white",fontWeight:"bold"}}>20</div>
                        <div style={{ width: "100%", height: "18px", background: "green",marginBottom:"2px",textAlign:"center",fontSize:"15px",color:"white",fontWeight:"bold"}}>15</div>
                        <div style={{ width: "100%", height: "18px", background: "green",marginBottom:"2px",textAlign:"center",fontSize:"15px",color:"white",fontWeight:"bold"}}>10</div>
                        <div style={{ width: "100%", height: "18px", background: "green",marginBottom:"2px",textAlign:"center",fontSize:"15px",color:"white",fontWeight:"bold"}}>5</div>
                        
                    </div>
        </div>
        <SpeedometerPage value={speedValue2} setValue={setSpeedValue2} />
      </div>
      {/* <div>
        <button onClick={handleClick}>Submit</button>
      </div> */}
      <div style={{border:"4px solid white",width:"600px" ,margin:"auto",borderRadius:"20px",marginBottom:"10px"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "10px", width: "200px", height: "4vh", color: "white", textAlign: "center", background: "black", borderRadius: "10px",fontSize:"20px",fontWeight:"bold"}} >Brake Force(L) </div>
        <div style={{ margin: "10px", width: "200px", height: "4vh", color: "white", textAlign: "center", background: "black", borderRadius: "10px",fontSize:"20px",fontWeight:"bold" }}>Brake Efficiency</div>
        <div style={{ margin: "10px", width: "200px", height: "4vh", color: "white", textAlign: "center", background: "black", borderRadius: "10px",fontSize:"20px",fontWeight:"bold" }}>Brake Force(R)</div>

      </div>
      </div>
      <div style={{border:"4px solid white",width:"600px" ,margin:"auto",borderRadius:"20px"}}>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "10px", width: "200px", height: "10vh", color: "white", fontSize: "50px", textAlign: "center", background: "black", borderRadius: "10px" }}>{speedValue1}</div>
        <div style={{ margin: "10px", width: "200px", height: "10vh", color: "white", fontSize: "50px", textAlign: "center", background: "black", borderRadius: "10px" }}>8.5 %</div>
        <div style={{ margin: "10px", width: "200px", height: "10vh", color: "white", fontSize: "50px", textAlign: "center", background: "black", borderRadius: "10px" }}>{speedValue2}</div>
</div>
      </div>
     
      </div>
    </>
  )
}





