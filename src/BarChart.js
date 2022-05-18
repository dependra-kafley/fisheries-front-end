import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return <>
    <p className="text-center ">
      Farmer Registered Month wise
    </p>
    <Bar data={chartData} ></Bar>
  </>;
}

export default BarChart;