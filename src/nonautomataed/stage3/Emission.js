import React from 'react'
import { useState } from 'react'
// import './stage.css'
import { Link } from 'react-router-dom'
export default function Emission() {
  const [stage1, setStage1] = useState("visible")
  const [stage2, setStage2] = useState("visible")
  const [stage3, setStage3] = useState("visible")
  return (
    <>
      <section>

        <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
          <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>3.4 - Emission</div>
          <hr style={{ color: "white", height: "4px", background: "white" }} />
          {/* <Link to="/stage1" style={{textDecoration:"none"}}> */}
          <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

          <div style={{ display: "flex",marginTop:"100px"  }} onClick={() => {
            setStage1("visible")
            setStage3("hidden")
            setStage2("hidden")

          }}>
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "", visibility: `${stage1}` }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue",padding: "10px"  }}>11001</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", paddingTop: "28px" }}>Emission control equioment i.e. oxygen or lambda sensor absent</div><br />

          </div>
          <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "130px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "130px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
          {/* </Link> */}
          {/* <Link to="/stage2" style={{textDecoration:"none"}}> */}
          <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

          <div style={{ display: "flex",marginTop:"100px" }} onClick={() => {
            setStage2("visible")
            setStage1("hidden")
            setStage3("hidden")
          }}>

            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "", visibility: `${stage2}` }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px"  }}>11002</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white",  paddingTop: "28px" }}>Catalytic converter missing / damaged</div><br />

          </div>
          <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "130px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "130px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
         



        </div>
      </section>


    </>



  )
}
