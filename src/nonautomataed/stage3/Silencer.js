
import { useState } from 'react'
// import './stage.css'
import { Link } from 'react-router-dom'
export default function Silencer() {
    const [stage1, setStage1] = useState("visible")
    const [stage2, setStage2] = useState("visible")
    const [stage3, setStage3] = useState("visible")
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>3.5 - Silencer</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    {/* <Link to="/stage1" style={{textDecoration:"none"}}> */}

                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>

                            <div style={{ width: "100%", height: "100%" }}>
                        <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

                                {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                                <div style={{ display: "flex" }}>

                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>13001</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Exhaust pipe broken / missing</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/SuppressorCap" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>13002</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Not secure i.e.broken bracket, fitting has ben improvised and rubber mounts broken/missing</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/Htcable" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex"}}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>13003</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wrong or faded as per rule 104</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex"}}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>13004</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Excess rusty / damaged</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex" }}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>13005</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Clearly unreasonable noisy / excessively smoking / throwing oil</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
