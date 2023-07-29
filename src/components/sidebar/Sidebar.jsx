import React from "react";

import { RxDashboard } from "react-icons/rx";
import { RiAdminLine } from "react-icons/ri";
import { TfiShoppingCartFull } from "react-icons/tfi";
import {
  TbTruckDelivery,
  TbBuildingWarehouse,
  TbBuildingFactory,
} from "react-icons/tb";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsPersonRolodex } from "react-icons/bs";
import { Link } from "react-router-dom";

const liClassName = "text-white hover:text-[#002060] cursor-pointer pl-4 p-2"; //flex items-center
const iconsClassName = " text-[#002060]  "; //mr-2
const iconsSize = Number(28);

const Sidebar = () => {
  return (
    <div className="border-r  border-gray-400 min-h-screen ">
      <ul className="m-0 p-0 font-light">
        <li className={liClassName}>
          <Link to="/" rel="stylesheet">
            <RxDashboard size={iconsSize} className={iconsClassName} />
            <span>Main</span>
          </Link>
        </li>

        <li className={liClassName}>
          <Link to="/adminTool" rel="stylesheet">
            <RiAdminLine size={iconsSize} className={iconsClassName} />
            <span>AdminTool</span>
          </Link>
        </li>
        <li className={liClassName}>
          <Link to="/purchases" rel="stylesheet">
            <TbTruckDelivery size={iconsSize} className={iconsClassName} />
            <span>Purchase</span>
          </Link>
        </li>
        <li className={liClassName}>
          <Link to="/sales_invoices" rel="stylesheet">
            <TfiShoppingCartFull size={iconsSize} className={iconsClassName} />
            <span>Sales</span>
          </Link>
        </li>
        <li className={liClassName}>
          <Link to="/products" rel="stylesheet">
            <TbBuildingWarehouse size={iconsSize} className={iconsClassName} />
            <span>Stock</span>
          </Link>
        </li>
        <li className={liClassName}>
          <Link to="/hr_documents" rel="stylesheet">
            <BsPersonRolodex size={iconsSize} className={iconsClassName} />
            <span>HR&PayRoll</span>
          </Link>
        </li>
        <li className={liClassName}>
          <TbBuildingFactory size={iconsSize} className={iconsClassName} />
          <link rel="stylesheet" href="" />
          <span>Production</span>
        </li>
        <li className={liClassName}>
          <MdOutlineHomeRepairService
            size={iconsSize}
            className={iconsClassName}
          />
          <link rel="stylesheet" href="" />
          <span>Autoservice</span>
        </li>
        <li className={liClassName}>
          <GiReceiveMoney size={iconsSize} className={iconsClassName} />
          <link rel="stylesheet" href="" />
          <span>Finance</span>
        </li>
        <li className={liClassName}>
          <HiOutlineComputerDesktop
            size={iconsSize}
            className={iconsClassName}
          />
          <link rel="stylesheet" href="" />
          <span>Assets</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
