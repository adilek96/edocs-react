import React from "react";

import { AiOutlineMore } from "react-icons/ai";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

////// temporary data
const valueForChart = 88;
/////////////////////////////////

const Featured = () => {
  return (
    <div className="border p-4 rounded-lg text-[#002060]">
      <div className="flex items-center justify-between">
        <h1>Total revenue</h1>
        <AiOutlineMore />
      </div>

      <div className="pl-4 pr-4 pt-2">
        <CircularProgressbar
          className="w-[200px] h-[200px]"
          value={valueForChart}
          maxValue={100}
          //   text={`${value * 100}%`}
          text={`${valueForChart}%`}
          strokeWidth={5}
        />
        <div className="text-base font-thin mt-5 items-center justify-center flex flex-col">
          <p className="title underline font-semibold">
            Total sales made today
          </p>
          <p className="amount text-lg font-medium"> 1321.00 AZN</p>
          <p className="description"> Son odenisler daxil olmaya biler.</p>

          <div className="flex w-full justify-between pt-4 font-semibold ">
            <div className="items-center flex flex-col">
              <p className="itemTitle  "> Target</p>
              <p className="itemResult  "> 1500.00 AZN</p>
            </div>
            <div className="items-center flex flex-col text-slate-600">
              <p className="itemTitle  "> Last week</p>
              <p className="itemResult "> 1000.00 AZN</p>
            </div>
            <div className="items-center flex flex-col text-amber-500">
              <p className="itemTitle"> Last month</p>
              <p className="itemResult"> 85500.00 AZN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
