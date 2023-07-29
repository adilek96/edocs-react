import React from "react";

//https://recharts.org/en-US/examples/SimpleAreaChart

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//////Temporary data
const data = [
  { name: "Yan.", Total: 1200 },
  { name: "Fev.", Total: 321.85 },
  { name: "Mar.", Total: 888 },
  { name: "Apr.", Total: 1888 },
  { name: "May", Total: 500 },
  { name: "Iyun", Total: 2200 },
  { name: "Iyul", Total: 6200 },
  { name: "Avq.", Total: 3200 },
  { name: "Sen.", Total: 2220 },
  { name: "Okt.", Total: 4200 },
  { name: "Noy.", Total: 8200 },
  { name: "Dek.", Total: 2200 },
];
/////////////////////

const CurrentChart = () => {
  return (
    <div  className="border p-2 rounded-lg text-[#002060] w-full min-w-[792px]">
        <p className=" pl-2" >Total per year</p>
      <ResponsiveContainer width="100%" aspect={2 / 1} >
        <AreaChart
          width={450}
          height={100}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="[#002060]"/>
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CurrentChart;
