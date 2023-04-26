import React from 'react'
import { Link } from 'react-router-dom'

export default function Stage1() {
    return (
        <section>

            <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>1 - STAGE 1</div>
                <hr style={{ color: "white", height: "4px", background: "white" }} />
                <div style={{ width: "100%", height: "86vh", display: "flex", marginTop: "20px" }}>
                    <div style={{ width: "50%", height: "100%" }}>
                        <Link to="/SparkPlug" style={{ textDecoration: "none" }}>
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>1.1</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Spark plug</div><br />
                            </div>
                        </Link>
                        <Link to="/SuppressorCap" style={{ textDecoration: "none" }}>

                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.2</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Suppressor cap</div><br />
                            </div>
                        </Link>
                        <Link to="/Htcable" style={{ textDecoration: "none" }}>
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.3</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>HT cable</div><br />
                            </div>
                        </Link>
                        <Link to="/RearView" style={{ textDecoration: "none" }}>
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.4</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Rear View mirror</div><br />
                            </div>
                        </Link>
                        <Link to="/sideMirror" style={{ textDecoration: "none" }}>
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.5</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Side mirror</div><br />
                            </div>
                        </Link>
                    </div>
                    <div style={{ width: "50%", height: "100%" }}>
                        {/* </Link> */}
                        <Link to="/safetyGlass" style={{ textDecoration: "none" }}>
                            <div style={{ display: "flex" }}>

                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.6</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Safety glass/wind shield glass</div><br />
                            </div>
                        </Link>
                        <Link to="/horn" style={{ textDecoration: "none" }}>
                            <div style={{ display: "flex" }}>
                                <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.7</button>
                                <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Horn</div><br />
                            </div>
                        </Link>
                        <Link to="/dashboardEquipment" style={{ textDecoration: "none" }}><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.8</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Dashboard equipment</div><br />
                        </div>
                        </Link>
                        <Link to="/warningLight" style={{ textDecoration: "none" }}><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.9</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Warning light</div><br />
                        </div>
                        </Link>
                        <Link to="/windScreen" style={{ textDecoration: "none" }}><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.10</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Windscreen wipers</div><br />
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
