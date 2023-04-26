import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Speedometer from "react-d3-speedometer";

// import "../Styles/SpeedTest.css";
export const Speedo=(props) =>{
  const [value, setValue] = useState(0);
  const interval = useRef(null);
  const generateRandom = (value) => {
    console.log("value1" , value)
    if(value<200){
      setValue((value)=>value+1)
      console.log("value",value)
    }else if(value===20){
      setValue(0);
      console.log("yes")
    }
    else{
      console.log("no")
    }
  }
  useEffect(() => {
    interval.current = setInterval(function() {
      // generateRandom(value);
  // console.log(value)

    },100);
    return () => clearInterval(interval.current);
  }, []);

  // console.log(value)
  return (
    <div className="App">
     
      <div>
        <Speedometer
          minValue={0}
          maxValue={200}
          // maxSegmentLabels={12}
          needleHeightRatio={0.8}
          ringWidth={25}
          segments={5}
          value={value}
          segmentColors={[
            "#b81414",
            "#ec5555",
            "#f2db5b",
            "#7ab55c",
            "#385828"
          ]}
          needleColor="#000080"
        />
        
      </div>
     
    </div>
  );
}
