import React, { useState } from 'react';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
  DangerPath,
} from 'react-speedometer';


const SpeedometerPage = ({value,setValue}) => {
//   const [speedValue,setSpeedValue] = useState(0)
  
  const handleInput = (e)=>{
    setValue(e)
  }


// const color =(value)=>{
//     if
// }



  return (
    <>
      <div className='flex flex-row' style={{fontWeight:"bold"}}> 
        <Speedometer 
            value={value}
            accentColor='white'
            max={500} 
            angle={260} 
            fontFamily="squada-one" 
           
            width={400} // set the width to 400 pixels
            height={400}
            >
            <Background angle={260} background={"black"}/>
            <Arc color={"white"} />
            <Needle color={"white"} circleColor='#fff' />
            <Progress color='green' arcWidth="16" />
            <Marks 
                step={50} 
            />
        </Speedometer>
        {/* <div className='text-center'>
            <div className='flex justify-center gap-12 mb-3'>
                <h6 className='text-xl font-bold'>Brake Force</h6>
                <h6 className='text-xl font-bold'>[Kgf]</h6>
            </div>
            <input className='text-center h-10 w-48 bg-slate-400 text-white' type="text" value={value} onChange={(e)=>{handleInput(e.target.value)}} />
        </div> */}
      </div>
    </>
  );
};

export default SpeedometerPage;

// #1B1212