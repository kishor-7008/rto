import React from 'react'
import { useState } from 'react'
// import './stage.css'
import { Link } from 'react-router-dom'
import { result } from '../result'

export default function SafetyGlass() {
    const[vision,setVision]=useState()
    const[screen,setScreen]=useState()
    const[stone,setStone]=useState()
    const[toughened,setToughened]=useState()
    const[standard,setStandard]=useState()
    const[tined,setTined]=useState()
    const[fitting,setFitting]=useState()
    const[scratches,setScratches]=useState()
    const[improper,setImproper]=useState()

    console.log([vision,screen,stone,toughened,standard,tined,fitting,scratches,improper])
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1.6 - Safety glass/wind shield glass</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    {/* <Link to="/stage1" style={{textDecoration:"none"}}> */}
                    <div style={{ width: "100%", height: "86vh", display: "flex",marginTop:"20px" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6001</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Vision obstruction caused by excessive sticker/object angles etc.</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "320px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setVision({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}onClick={(e)=>{result(e)
            setVision({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6002</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Screen damaged</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "935px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setScreen({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setScreen({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6003</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Stone chip damage in the driver view area</div><br />
                                 <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "615px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setStone({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setStone({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6004</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Toughened glass is fitted instead of laminated safety glass in the front windscreen</div><br /> 
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "100px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setToughened({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setToughened({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6005</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Not of standard marking of laminated safety glass</div><br />
                                 <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "510px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setStandard({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setStandard({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6006</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Tinted films fitted on the glass</div><br />
                                 <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "770px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setTined({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setTined({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6007</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Fitting loose or demaged</div><br /> 
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "840px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setFitting({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setFitting({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6008</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Scratches on the wind screen</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "780px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setScratches({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setScratches({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div><div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>6009</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Improper fitment as specified in rules and regulations</div><br /> 
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "0px", marginLeft: "470px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setImproper({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "0px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setImproper({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>

                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
