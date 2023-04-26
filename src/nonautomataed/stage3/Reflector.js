import React from 'react'
import { useState } from 'react'
// import './stage.css'
import { Link } from 'react-router-dom'
export default function Reflector() {
    const [stage1, setStage1] = useState("visible")
    const [stage2, setStage2] = useState("visible")
    const [stage3, setStage3] = useState("visible")
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>3.6 - Reflector</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    {/* <Link to="/stage1" style={{textDecoration:"none"}}> */}
                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3001</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Not fitted</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3002</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Not effective / damaged</div><br />
                                </div> <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>

                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3003</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Wrong colour or fadded as rule 104</div><br />
                                </div> <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3004</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Broken</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3005</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Party missing</div><br />
                                </div> <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3006</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Cracked reflector</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3007</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Covered with tape</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3008</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>White light showing through the reflector</div><br />
                                </div> <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "50px", height: "50px", visibility: "visible", marginTop: "10px" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "50px", width: "50px", padding: "5px", marginTop: '10px', fontWeight: "bold", fontSize: "15px", color: "blue", marginRight: "20px" }}>3009</button>
                                    <div style={{ fontWeight: "bold", fontSize: "25px", display: "inline-block", color: "white", marginTop: "15px" }}>Reflector obstructed</div><br />
                                </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
