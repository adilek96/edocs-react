import React from "react";
import { GrMoney, GrCart, GrUser } from "react-icons/gr";
// import {TbCurrencyManat} from "react-icons/tb";

const Widget = ({ type }) => {
  ////// temporary data
  const amount = 1321;
/////////////////////////////////


  let data;

  switch (type) {
    case "salesDocuments":
      data = {
        title: "Продажи",
        isMoney: true,
        currencyName: "AZN",
        link: "See all sales...",
        icon: <GrCart size={20} />,
      };
      break;

    case "financeDocuments":
      data = {
        title: "Выручка",
        isMoney: true,
        currencyName: "AZN",
        link: "See balance...",
        icon: <GrMoney size={20} />,
      };
      break;

    case "clientsList":
      data = {
        title: "Покупатели",
        isMoney: false,
        currencyName: "",
        link: "See all...",
        icon: <GrUser size={20} />,
      };
      break;

    default:
      break;
  }

  return (
    <>
      <div>
        <div className=" bg-white flex justify-between w-full border p-4 rounded-lg">
          <div className="flex flex-col w-full pb-2 text-gray-600">
            <div className=" pb-2 ">
              <p className="text-2xl font-bold">
                {data.isMoney && data.currencyName} {amount}
              </p>
            </div>

            <div className="flex items-center pt-2">
              {data.icon}
              <p className="ml-2">{data.title}</p>

              <p className="ml-20 text-sm underline text-blue-600 cursor-pointer">
                {data.link}
              </p>
            </div>
          </div>
          <p className="bg-green-400 flex justify-center items-center p-3 rounded-lg">
            <span>+22%</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Widget;
