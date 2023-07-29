import React from "react";

import TopBar from "../../components/topBar/topBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import Fuautered from "../../components/charts/Featured";
import CurrentChart from "../../components/charts/CurrentChart";

const Home = () => {
  return (
    <div className="font-bold ">
      <TopBar />
      <div className="flex flex-1">
        <div className=" w-[10%] ">
          <Sidebar />
        </div>

        <div className=" w-full justify-between grid lg:grid-cols-3 gap-4 p-4 h-20">
          <Widget type="salesDocuments" />
          <Widget type="financeDocuments" />
          <Widget type="clientsList" />

          <Fuautered />
          <CurrentChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
