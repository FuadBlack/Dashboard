import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Box } from "./Box";
import { colors } from "../constants/colors";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LinearScale,
  PointElement,
  CategoryScale,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="info">
          <div className="info-title">
            <div>{item.title}</div>
            <span>{item.subtitle}</span>
          </div>
          <div className="info-value">{item.value}</div>
        </div>
        <div className="chart">
          <CircularProgressbarWithChildren
            value={item.percent}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: item.percent < 50 ? colors.red : colors.purple,
              trailColor: "transparent",
              strokeLinecap: "round",
            })}
          >
            <div className="value">{item.percent}%</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </Box>
  );
};

export const SummaryBoxSpecial = ({ item }) => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: true,
      },
      yAxis: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    elements: {
      point: { radius: 2 },
    },
  };

  const chartData = {
    labels: item.chartData.labels,
    datasets: [
      {
        label: "Revenue",
        data: item.chartData.data,
        borderColor: "black",
        tension: 0.5,
      },
    ],
  };

  return (
    <Box fullHeight>
      <div className="summary-box-special">
        <div className="title">{item.title}</div>
        <div className="value">{item.value}</div>
        <div className="chart">
          <Line options={chartOptions} data={chartData} width={250} />
        </div>
      </div>
    </Box>
  );
};
