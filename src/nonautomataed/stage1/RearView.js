import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { result } from '../result'
export default function RearView() {
    const[reqMirror,setReqMirror]=useState()
    const[wrongSize,setWrongSize]=useState()
    const[looseFit,setLooseFit]=useState()
    const[anchorage,setAnchorage]=useState()
    const[mirrorD,setMirrorD]=useState()
    const[unable,setUnable]=useState()
    console.log([reqMirror,wrongSize,looseFit,anchorage,mirrorD,unable])
    
    
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1.4 - Rear View Mirror</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>5001</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Required mirrors missing</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "700px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setReqMirror({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setReqMirror({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>


                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>5002</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wrong size fitted</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "830px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWrongSize({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setWrongSize({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                          
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>5003</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Loose fitting</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "900px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setLooseFit({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setLooseFit({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>5004</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>No proper anchorage</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "760px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setAnchorage({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setAnchorage({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>5005</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Mirror damaged</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "835px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setMirrorD({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setMirrorD({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>5006</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Unable to adjust</div><br />
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", marginLeft: "840px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setUnable({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>PASS</div>
                                <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e)=>{result(e)
            setUnable({name: e.target.parentNode.children[2].innerHTML,
              result: e.target.innerHTML})}}>FAIL</div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
