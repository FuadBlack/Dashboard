import React from "react";
import { Box } from "../components/Box";
import {
  DashboardWrapper,
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../components/DashboardWrapper";
import { Grid } from "../components/Grid";
import { SummaryBox, SummaryBoxSpecial } from "../components/SummaryBox";
import { colors } from "../constants/colors";
import { data } from "../constants/data";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { OverallList, OverllList } from "../components/OveallList";
import { RevenueList } from "../components/RevenueList";

ChartJS.register(
  LinearScale,
  PointElement,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Dashboard = () => {
  return (
    <div>
      <DashboardWrapper>
        <DashboardWrapperMain>
          <Grid col={2} mdCol={1} smCol={1} gap={30}>
            <Grid col={2} mdCol={1} smCol={1} gap={20}>
              {data.summary.map((item, index) => (
                <SummaryBox key={index} item={item} />
              ))}
            </Grid>
            <div>
              <SummaryBoxSpecial item={data.revenueSummary} />
            </div>
          </Grid>
          <div>
            <RevenueByMonthsChart />
          </div>
        </DashboardWrapperMain>
        <DashboardWrapperRight>
          <div className="title mb">Overall</div>
          <div>
            <OverallList />
          </div>
          <div className="title my">Revenue List</div>
          <div>
            <RevenueList />
          </div>
        </DashboardWrapperRight>
      </DashboardWrapper>
    </div>
  );
};

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: true,
          drawBorder: true,
        },
      },
      yAxes: {
        grid: {
          display: true,
          drawBorder: true,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
      },
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      },
    },
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: data.revenueByMonths.data,
      },
    ],
  };
  return (
    <div className="revenue-month">
      <div className="title">Revenue by month</div>
      <div>
        <Bar
          options={chartOptions}
          data={chartData}
          height={300}
          width={"100%"}
        />
      </div>
    </div>
  );
};
