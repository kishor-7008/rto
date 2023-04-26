import React from 'react'
import { useState } from 'react'
import { result } from '../result'
import { Link } from 'react-router-dom'
export default function SideMirror() {
  const[sideMirror,setSideMirror]=useState()
  const[HCV,setHCV]=useState()
  console.log([sideMirror,HCV])
  return (
    <>
      <section>

        <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
          <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1.5 - Side Mirror</div>
          <hr style={{ color: "white", height: "4px", background: "white" }} />
          <div style={{ display: "flex", marginTop: "50px" }} >
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px" }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px" }}>5007</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>For 3 wheeled vehicles, side mirrors are not fitted correctly or are turned in side</div><br />
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setSideMirror({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setSideMirror({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

          </div>

          <div style={{ display: "flex", marginTop: "50px" }} >

            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px" }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px" }}>5008</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>For HCV and Buses, must be fitted with one on driver side and two on left side</div><br />
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setHCV({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setHCV({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

          </div>
         


        </div>
      </section>


    </>



  )
}
