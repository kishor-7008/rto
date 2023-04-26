import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false, // remove X axis
            },
            border: {
                display: false, // remove X axis outline
            },
        },
        y: {
            grid: {
                display: false, // remove Y axis
            },
            ticks: {
                display: false, // remove Y axis numbers
            },
            border: {
                display: false, // remove X axis outline
            },
        },
    },
};

const data = {
    labels: ["", "", "", ""],
    datasets: [
        {
            label: "Break Frequency ",
            data: [1, 1, 1, 1],
            fill: true,
            backgroundColor: ["red", "yellow", "orange", "green"],
            borderColor: "rgba(75,192,192,1)",
            color: "white",
            tension: 0.4,
            pointBorderColor: 'aqua'
        }
    ]
};

 const BarChart = () => {
    return <Bar data={data} options={options}
    />;
};
export default BarChart