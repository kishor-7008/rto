import { result2 } from '../result2'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function StopLight() {
const[fitted,setFitted]=useState()
const[unauthorized,setUnauthorized]=useState()
const[lens,setLens]=useState()
const[bulb,setBulb]=useState()
const[wrong,setWrong]=useState()
console.log(fitted)
    return (
        <>
            <section>

                <div class="mask-image" style={{ background: "black", height: "100vh", width: "100%" }}>
                    <div style={{ width: "100%", height: "10vh", textAlign: "center", fontSize: "50px", fontWeight: "bold", color: "blue" }}>2.5 - Stop Lights</div>
                    <hr style={{ color: "white", height: "4px", background: "white" }} />
                    <div style={{ width: "100%", height: "86vh", display: "flex" }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>
                                <div style={{ display: "flex" }}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "90px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px", paddingRight: "auto" }}>15006</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Not fitted/missing</div><br />
                                </div><div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e) => {
                                        result2(e)
                                        setFitted({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }} onClick={(e) => {
                                        result2(e)
                                        setFitted({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>
                                <div style={{ display: "flex" }}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>15007</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Unauthorized light fitted</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setUnauthorized({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setUnauthorized({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", marginTop: "20px" }}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>15008</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Lens broken and reflector excessively corroded/obstructed</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setLens({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setLens({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>FAIL</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>

                                <div style={{ display: "flex", marginTop: "20px" }}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>15009</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Bulb not functioning</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setBulb({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setBulb({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>FAIL</div>
                                </div>
                            </div>

                            <div style={{ display: "flex", marginTop: "20px", width: "100%", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", marginTop: "20px" }}>
                                    <img src="/image/arrownew.png" style={{ width: "100px", height: "80px", marginTop: "10px", visibility: "visible" }} />
                                    <button class="red" style={{ borderRadius: "50%", height: "80px", width: "80px", padding: "10px", marginTop: '10px', fontWeight: "bold", fontSize: "20px", color: "blue", marginRight: "20px" }}>15010</button>
                                    <div style={{ fontWeight: "bold", fontSize: "30px", display: "inline-block", color: "white", marginTop: "30px" }}>Wrong colour</div><br />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "20px", marginTop: "30px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setWrong({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>PASS</div>
                                    <div style={{ color: "white", width: "100px", height: "60px", border: "1px solid white", padding: "15px", paddingLeft: "25px", marginTop: "30px", marginLeft: "20px", fontSize: "20px", fontWeight: "bold", borderRadius: "20px" }}  onClick={(e) => {
                                        result2(e)
                                        setWrong({name:e.target.parentNode.parentNode.children[0].children[2].innerHTML,result:e.target.innerHTML})
                                        
                                    }}>FAIL</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>



    )
}
