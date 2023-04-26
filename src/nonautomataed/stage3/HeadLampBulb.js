
import { useState } from 'react'
// import './stage.css'
import { Link } from 'react-router-dom'
export default function HeadLampBulb() {
    const [stage1, setStage1] = useState("visible")
    const [stage2, setStage2] = useState("visible")
    const [stage3, setStage3] = useState("visible")
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>3.8 - Head Lamp Bulbs</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    {/* <Link to="/stage1" style={{textDecoration:"none"}}> */}
                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex",marginTop:"2px" }}>

                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>2001</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Not Fitted</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/SuppressorCap" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex",marginTop:"2px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2002</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Loose fitting</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/Htcable" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex",marginTop:"2px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2003</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Not working</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex",marginTop:"2px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2004</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Non compliance to rule 136 sub rule 5 i.e .wrong halogen lamp</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex",marginTop:"2px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2005</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Broken / damaged</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>

                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex",marginTop:"2px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2006</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wiring to bulb holder / bracket not secure</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>

                            <div style={{ display: "flex",width: "100%", justifyContent: "space-between" }}>

                            <div style={{ display: "flex",marginTop:"2px" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2007</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wiring insulation damaged</div><br />
                            </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop:"10px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop:"10px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}>FAIL</div>
                                </div>
                            </div>
                            {/* </Link> */}
                            {/* <Link to="/SparkPlug" style={{ textDecoration: "none" }}> */}
                            {/* <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop:'10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>5006</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Unable to adjust</div><br />
                            </div> */}
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </section>


        </>



    )
}
