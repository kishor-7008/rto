import React from 'react'
import { Link } from 'react-router-dom'
export default function Stage2() {
    return (
        <section>

            <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>2 - STAGE 2</div>
                <hr style={{ color: "white", height: "4px", background: "white" }} />
                <div style={{ width: "100%", height: "86vh", display: "flex", marginTop: "20px" }}>
                    <div style={{ width: "50%", height: "100%" }}>
                        <Link to="/fogLamp">
                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>2.1</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Fog lamps (if applicable)</div><br />
                        </div>
                        </Link>
                        
                        <Link to="/directionIndicator">

                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.2</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Direction indicator</div><br />
                        </div>
                        </Link>
                        <Link to="/hazard">

                        
                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.3</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Hazards (Warning)</div><br />
                        </div>
                        </Link>
                        
                        <Link to="/parkingLight">

                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.4</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Parking lights</div><br />
                        </div>
                        </Link>
                        <Link to="/stopLight">

                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.5</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Stop lights</div><br />
                        </div>
                        </Link>
                    </div>
                    
                    

                    <div style={{ width: "50%", height: "100%" }}>
                    <Link to="/numberPlate">
                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.6</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Number plate lights</div><br />
                        </div>
                       </Link>
                       
                    <Link to="/bodyOutlining">

                        <div style={{ display: "flex"}}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.7</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Body outlining marking lights</div><br />
                        </div>
                        </Link>
                    <Link to="/topLight">

                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.8</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Top lights</div><br />
                        </div>
                        </Link>
                        
                    <Link to="/spedometerSld">

                        <div style={{ display: "flex" }}>
                            <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                            <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: "20px", fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>2.9</button>
                            <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Sppedometer and SLD (in case og HCV)</div><br />
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
