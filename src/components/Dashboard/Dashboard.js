import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <LineChart width={600} height={400} data={data}>
      <Line dataKey={"sell"}></Line>
      <XAxis dataKey={"month"}></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </LineChart>
  );
};

export default Dashboard;
