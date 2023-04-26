import React from 'react'
import { useState } from 'react'
// import './stage.css'
import { result } from '../result'
import { Link } from 'react-router-dom'
export default function Windscreen() {
    const[wiper,setWiper]=useState()
    const[wheeler,setWheeler]=useState()
    const[loose,setLoose]=useState()
    const[Blade,setBlade]=useState()
    const[wrong,setWrong]=useState()
    return (
        <>
            <section>
                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1.10 - Windscreen Wipers</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            <div style={{ display: "flex", marginTop: "20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>7001</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wiper missing</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "875px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWiper({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWiper({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>

                            <div style={{ display: "flex", marginTop: "20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>7002</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>For three wheeler manual wiper not fitted (Register before oct 2006)</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "55px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWheeler({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWheeler({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex", marginTop: "20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>7003</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Not operating or loose fitting</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "655px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setLoose({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setLoose({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex", marginTop: "20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>7004</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wiper blade missing/worn out</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "630px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setBlade({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setBlade({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex", marginTop: "20px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>7005</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wiper blades are not stopping at correct place i.e.going beyond wrong place</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWrong({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWrong({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
