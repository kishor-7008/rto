import React from 'react'
import { useState } from 'react'
// import './stage.css'
import { Link } from 'react-router-dom'
export default function HeadLamps() {
    const [stage1, setStage1] = useState("visible")
    const [stage2, setStage2] = useState("visible")
    const [stage3, setStage3] = useState("visible")
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize:"50px", fontWeight: "bold", color: "blue" }}>3.9 - Head Lamps</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    {/* <Link to="/stage1" style={{textDecoration:"none"}}> */}
                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1001</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Bulb fused or not fitted</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1002</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Operating switch not working</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>
                            
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1003</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Additional unauthorized head lamp fitted</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>

                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1004</button>
                                <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Lens obstruction e.g .partially black/colour painted/sticker pasted</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>
                            
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1005</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Lens broken / cracked</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>
                            
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1006</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Dim light(i.e.one light brighter than other)</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>
                            
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1007</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Mixing of high and low beam between two headlamps</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>
                            
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1008</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Dipping operation not functioning</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>
                            
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding:"5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>1009</button>
                                <div style={{ fontWeight: "bold", fontSize:"25px", display: "inline-block", color: "white", marginTop: "15px" }}>Head lamps levelling device operation not functioning on vehicles registered after Oct 2005</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
