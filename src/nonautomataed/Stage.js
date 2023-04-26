import React from 'react'
import { useState } from 'react'
import './stage.css'
import { Link } from 'react-router-dom'
export default function Stage() {
  const [stage1, setStage1] = useState("visible")
  const [stage2, setStage2] = useState("visible")
  const [stage3, setStage3] = useState("visible")
  return (
    <>
      <section>

        <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
          <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>Visual Inspection</div>
          <hr style={{ color: "white", height: "4px", background: "white" }} />
          <Link to="/stage1" style={{textDecoration:"none"}}>
          <div style={{ display: "flex" }} onClick={() => {
            setStage1("visible")
            setStage3("hidden")
            setStage2("hidden")

          }}>
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "", visibility: `${stage1}` }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "40px", margin: "20px 30px 20px 0 ", color: "blue", padding: "auto" }}>1</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>STAGE 1</div><br />

          </div>
          </Link>
          <Link to="/stage2" style={{textDecoration:"none"}}>

          <div style={{ display: "flex" }} onClick={() => {
            setStage2("visible")
            setStage1("hidden")
            setStage3("hidden")
          }}>

            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "", visibility: `${stage2}` }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "40px", margin: "20px 30px 20px 0 ", color: "blue", padding: "auto" }}>2</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>STAGE 2</div><br />

          </div>
          </Link>
          <Link to="/stage3" style={{textDecoration:"none"}}>

          <div style={{ display: "flex" }} onClick={() => {
            setStage3("visible")
            setStage2("hidden")
            setStage1("hidden")
          }}>
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "", visibility: `${stage3}` }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "40px", margin: "20px 30px 20px 0 ", color: "blue", padding: "auto" }}>3</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>STAGE 3</div><br />

          </div>
          </Link>



        </div>
      </section>


    </>



  )
}
