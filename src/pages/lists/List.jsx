import React from "react";
import Datatable from "../../components/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/topBar";

const List = () => {
  return (
    <div>
      <div className="sticky">
        <TopBar />
      </div>

      <div className="flex flex-1">
        <div className=" w-[10%] ">
          <Sidebar />
        </div>
        <div className="p-2 w-full">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default List;
