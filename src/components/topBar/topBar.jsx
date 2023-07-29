import React from "react";

import { BiUserCircle } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { RxChatBubble } from "react-icons/rx";
import { AiOutlineLogout, AiOutlineWifi } from "react-icons/ai";
import {BsWifiOff} from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="flex justify-between  p-4 items-center sticky top-0 bg-white border-b border-gray-400">
      <div className="flex justify-center items-center">
        <BiUserCircle size={32} className="text-[#002060]" />

        <div className="underline text-[#002060] pl-1 text-base font-medium cursor-pointer ">
          Əliyev Əli (Ru)
        </div>

        <div className="pl-4 flex items-center" > <AiOutlineWifi size={24} className="text-green-600"/> 
              <BsWifiOff size={24} className="text-red-600"/></div>
      </div>

     

      <div className=" flex -mr-1">
        <div>
          <RxChatBubble
            size={24}
            className="text-[#002060] cursor-pointer mr-2"
          />

          <h1
            className="absolute flex justify-center items-center rounded-[100%] w-4 h-4
             bg-red-600 top-4 right-16 text-white text-sm"
          >
            2
          </h1>
        </div>

        <div className="flex mr-4">
          <MdOutlineNotifications
            size={24}
            className="text-[#002060] cursor-pointer "
          />

          <h1
            className="absolute flex justify-center items-center rounded-[100%] w-4 h-4
             bg-red-600 top-4 right-24 text-white text-sm"
          >
            2
          </h1>
        </div>

        <div className="flex ml-4">
          <AiOutlineLogout
            size={24}
            className="text-purple-900 cursor-pointer rotate-90"
          /> 
          
        </div>

        {/* <h2>Dashboard</h2> */}
      </div>
    </div>
  );
};

export default TopBar;
