import React, { useState } from "react";
import { Line } from "react-chartjs-2";
// import "./LineChart.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import BarGraph from "./BarGraph";

const Graph = ({ title, cost, color, graphData, barGraph }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = {
    labels: ["0%", "5%", "7%", "38%", "39%", "40%", "50%", "80%"],
    datasets: [
      {
        label: "Data",
        data: graphData,
        fill: true,
        borderColor: color,
        backgroundColor: "transparent",
        lineTension: 0.5, // Adjust the line tension to create a curved line
        pointRadius: 0,
      },
    ],
  };

  const handleHover = (event, chartElements) => {
    if (chartElements.length > 0) {
      const index = chartElements[0].index;
      setHoveredIndex(index);
    } else {
      setHoveredIndex(null);
    }
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      intersect: false,
    },
    tooltips: {
      enabled: false,
    },
    hover: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
  };

  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(LineElement);
  Chart.register(PointElement);
  const chartStyle = {
    "--line-hover-color": hoveredIndex != null ? "white" : "blue",
  };

  return (
    <div className="w-[40%]">
      <div className="">
        <h1 className={`font-semibold text-[${color}]`}>{title}</h1>
        <h2 className="text-4xl font-bold">{cost}</h2>
      </div>
      <div className="chart-container h-[40%]" style={chartStyle}>
        <Line data={data} options={options} onHover={handleHover} />
      </div>
      <BarGraph data={barGraph}/>
    </div>
  );
};

export default Graph;
