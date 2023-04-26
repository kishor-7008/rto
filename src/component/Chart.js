import React from 'react'
import { Line } from "react-chartjs-2";

import { Chart as chartjs, LineElement,CategoryScale,LinearScale,PointElement ,Legend} from 'chart.js';
chartjs.register(
  LineElement,
  CategoryScale, // x- axis
  PointElement,
  LinearScale // y- axis
  ,
  Legend
)
export const Chart = () => {

    const data = {
        labels: ["2016", "2017", "2018", "2019", "2021", "2022"],
        datasets: [
        
          {
            label: "",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };


      const options = {
        Plugins:{
          legend:true
        },
        scales:{
          y:{
            // min:3,
            // max:6
          }
        }
      }
      
  return (
    <div className="chart">
    <Line data={data}
    options={options} />
    </div>
   
  )
}