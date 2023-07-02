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

const LineChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G"],
    datasets: [
      {
        label: "Data",
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: true,
        borderColor: "white",
        backgroundColor: "transparent",
        hoverBackgroundColor: "blue",
        hoverBorderWidth: 2,
        pointRadius: 0,
      },

      {
        label: "Data",
        data: [6, 10, 14, 18, 21, 25, 22],
        fill: true,
        borderColor: "#8f66ff",
        backgroundColor: "transparent",
        hoverBackgroundColor: "blue",
        hoverBorderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Data",
        data: [1, 5, 9, 13, 17, 21, 34],
        fill: true,
        borderColor: "#00d395",
        backgroundColor: "transparent",
        hoverBackgroundColor: "blue",
        hoverBorderWidth: 2,
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
    <div>
      <div className="chart-container" style={chartStyle}>
        <Line data={data} options={options} onHover={handleHover} />
      </div>
    </div>
  );
};

export default LineChart;
