import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { result } from '../result'
export default function SuppressorCap() {
  const[suppressor,setSuppressor]=useState()
  const[contract,setContract]=useState()
  const[silicon,setSilicon]=useState()
 
  console.log([suppressor,contract,silicon])
  // localStorage.setItem("data",[suppressor,contract,silicon])
  // console.log(localStorage.getItem("data"),"Wjk qshbaxs - ds-zccuwsdcbgyuc")
  return (
    <>
      <section>

        <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
          <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1.2 - Suppressor Cap</div>
          <hr style={{ color: "white", height: "4px", background: "white" }} />
          <div style={{ display: "flex" }} >
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px"}} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue",padding: "10px"  }}>16004</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>Suppressor cap missing</div><br />
            <div style={{color:"white",width:"100px",height:"60px",border:"1px solid white",padding:"15px",paddingLeft:"20px",marginTop:"30px",marginLeft:"347px",fontSize:"20px",fontWeight:"bold",borderRadius:"20px"}} 
            onClick={(e)=>{result(e)
               setSuppressor({name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML})}}>PASS</div>
            <div style={{color:"white",width:"100px",height:"60px",border:"1px solid white",padding:"15px",paddingLeft:"25px",marginTop:"30px",marginLeft:"20px",fontSize:"20px",fontWeight:"bold",borderRadius:"20px"}}  onClick={(e)=>{result(e)
            setSuppressor({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>
            
          </div>

          <div style={{ display: "flex" }} >

            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px" }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px"  }}>16005</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", paddingTop: "28px" }}>Contract clip on inner core of HT cable missing</div><br />
            <div style={{color:"white",width:"100px",height:"60px",border:"1px solid white",padding:"15px",paddingLeft:"20px",marginTop:"30px",marginLeft:"10px",fontSize:"20px",fontWeight:"bold",borderRadius:"20px"}}  onClick={(e)=>{result(e)
            setContract({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
          <div style={{color:"white",width:"100px",height:"60px",border:"1px solid white",padding:"15px",paddingLeft:"25px",marginTop:"30px",marginLeft:"20px",fontSize:"20px",fontWeight:"bold",borderRadius:"20px"}}  onClick={(e)=>{result(e) 
          setContract({name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML})}}>FAIL</div>
            
          </div>
          <div style={{ display: "flex" }} >
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px" }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px" }}>16006</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", paddingTop: "28px" }}>Silicon rubber missing /damaged /frayed</div><br />
            <div style={{color:"white",width:"100px",height:"60px",border:"1px solid white",padding:"15px",paddingLeft:"20px",marginTop:"30px",marginLeft:"350px",fontSize:"20px",fontWeight:"bold",borderRadius:"20px"}}  onClick={(e)=>{result(e) 
             setSilicon({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})
            }}>PASS</div>
            <div style={{color:"white",width:"100px",height:"60px",border:"1px solid white",padding:"15px",paddingLeft:"25px",marginTop:"30px",marginLeft:"20px",fontSize:"20px",fontWeight:"bold",borderRadius:"20px"}}  onClick={(e)=>{result(e) 
             setSilicon({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})
            }}>FAIL</div>
            
          </div>



        </div>
      </section>


    </>



  )
}
