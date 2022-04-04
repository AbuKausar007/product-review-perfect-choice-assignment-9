import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const MyLineChart = () => {
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
    <div className=" flex flex-col items-center justify-center">
      <p className="notes text-xl text-sky-600 font-semibold">
        MONTH WISE SELL
      </p>
      <LineChart width={600} height={400} data={data}>
        <Line type="monotone" dataKey={"sell"}></Line>
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Legend></Legend>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
