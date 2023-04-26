import React from 'react'
import { Link } from 'react-router-dom'

export default function Stage3() {
    return (
        <section>

            <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>3 - STAGE 3</div>
                <hr style={{ color: "white", height: "4px", background: "white" }} />
                <div style={{ width: "100%", height: "86vh", display: "flex", marginTop: "20px" }}>
                    <div style={{ width: "50%", height: "100%" }}>
                        <Link to="/streeingGear">
                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>3.1</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Steering gear under pit inspection</div><br />
                        </div>
                        </Link>
                        <Link to="/streeingPlay">
                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.2</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Steering play measurement</div><br />
                        </div>
                        </Link>
                        <Link to="/brakeSystem"><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.3</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Braking system</div><br />
                        </div>
                        </Link>
                        <Link to="/emission"><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.4</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Emission</div><br />
                        </div> </Link>
                        <Link to="/silencer"><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.5</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Silencer</div><br />
                        </div>
                        </Link>
                    </div>
                    <div style={{ width: "50%", height: "100%" }}>
                    {/* </Link> */}
                        <Link to="/reflector">
                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.6</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Reflector</div><br />
                        </div>
                        </Link>
                        <Link to="/reflectiveTape">
                       
                        <div style={{ display: "flex",marginTop:"15px" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.7</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Reflective tape</div><br />
                        </div>
                        </Link>
                        <Link to="/headLampBulb"><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.8</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Head lamp bulbs</div><br />
                        </div></Link>
                        <Link to="/headLamps"><div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>3.9</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Head lapms</div><br />
                        </div>
                        </Link>
                        {/* <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>1.10</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Windscreen wipers</div><br />
                        </div> */}
                    </div>
                </div>

            </div>
        </section>
    )
}
