import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { result } from '../result'
export default function SparkPlug() {
  const [clamped, setClamped] = useState()
  const [Terminalnput, setTerminalnput] = useState()
  const [insulator, setInsulator] = useState()


  console.log([clamped,Terminalnput,insulator])
  // console.log(Terminalnput)
  // console.log(insulator)
  return (
    <>
      <section>

        <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
          <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1.1 - Spark Plug</div>
          <hr style={{ color: "white", height: "4px", background: "white" }} />
          <div style={{ display: "flex" }}>
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "" }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px" }}>16001</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }} class="hello">Not properly tightenend/clamped</div><br />
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "45px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} 
            onClick={(e) => {
              if (e.target.style.background == "") {
                e.target.style.background = "green"
                e.target.parentNode.children[5].style.background = ""

              } else {
                e.target.style.background = ""
              }
              setClamped({
                name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML
              })
            }}>PASS</div>
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e) => {
              if (e.target.style.background == "") {
                e.target.style.background = "red"
                e.target.parentNode.children[4].style.background = ""
              } else {
                e.target.style.background = ""
              }
              setClamped({
                name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML
              })

            }}>FAIL</div>


          </div>
          <div style={{ display: "flex" }}>

            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "" }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px" }}>16002</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>Terminalnput missing</div><br />
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "350px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e) => {
              if (e.target.style.background == "") {
                e.target.style.background = "green"
                e.target.parentNode.children[5].style.background = ""

              } else {
                e.target.style.background = ""
              }
              setTerminalnput({
                name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML
              })
            }}>PASS</div>
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e) => {
              if (e.target.style.background == "") {
                e.target.style.background = "red"
                e.target.parentNode.children[4].style.background = ""

              } else {
                e.target.style.background = ""
              }
              setTerminalnput({
                name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML
              })
            }}>FAIL</div>

          </div>
          <div style={{ display: "flex" }} >
            <img src="/image/arrownew.png" style={{ width: "200px", height: "150px", paddingTop: "" }} />
            <button class="red" style={{ borderRadius: "50%", height: "100px", width: "100px", textAlign: "center", fontWeight: "bold", fontSize: "28px", margin: "20px 30px 20px 0 ", color: "blue", padding: "10px" }}>16003</button>
            <div style={{ fontWeight: "bold", fontSize: "50px", display: "inine-block", color: "white", textAlign: "center", paddingTop: "28px" }}>Insulator broken/cracked</div><br />
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "258px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e) => {
              if (e.target.style.background == "") {
                e.target.style.background = "green"
                e.target.parentNode.children[5].style.background = ""

              } else {
                e.target.style.background = ""
              }
              setInsulator({
                name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML
              })
            }}>PASS</div>
            <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e) => {
              if (e.target.style.background == "") {
                e.target.style.background = "red"
                e.target.parentNode.children[4].style.background = ""

              } else {
                e.target.style.background = ""
              }
              setInsulator({
                name: e.target.parentNode.children[2].innerHTML,
                result: e.target.innerHTML
              })
            }}>FAIL</div>

          </div>



        </div>
      </section>


    </>



  )
}
