import React, { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topBar/topBar";
import {
  AiOutlineCheck,
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { RiDeleteBin2Line, RiFindReplaceLine } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";

import { data } from "../../data/dataPurchaseDocuments";
import { Link } from "react-router-dom";

const thStyle = "border-r-2 border-gray-200  pr-2 pl-2";

const approveStyle = "w-4 h-4 text-green-600";
const notApproveStyle = "w-4 h-4 text-white";

const textStyleDocIsDeleted = "line-through text-red-900";
const textStyleDocNormal = "";

const PurchaseDocumentsList = () => {
  let resultApi = data.map(function (item) {
    return (
      <tr
        className="border-b-2 border-gray-200 text-[#002060] text-center"
        key={item.DocID}
      >
        <td className="border-r-2 border-gray-200  p-2 ">
          <input
            type="checkbox"
            name="listRowCheckbox"
            id="listRowCheckbox"
            className="w-4 h-4"
          />
        </td>

        <td className="border-r-2 border-gray-200  pr-2 pl-2 ">
          {/* если документ проведен тогда Зеленый цвет. 
          Если просто записан, тогда Белый */}

          <AiOutlineCheck
            className={item.Aproved ? approveStyle : notApproveStyle}
          />
        </td>

        <td className="border-r-2 border-gray-200 pr-1 pl-1 ">
          <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.DocCloseChangeDate}

          </div>
        </td>

        <td className="border-r-2 border-gray-200 pr-1 pl-1">{item.Code}</td>

        <td className="border-r-2 border-gray-200 pr-1 pl- text-left  underline cursor-pointer ">
          <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
            № {item.DocumentNumber} - {item.DocumentDate}
            <br /> ({item.DocumentName})
          </div>
        </td>

        <td className="border-r-2 border-gray-200  pr-1 pl-1 ">
        <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.OurCompanyName}
         </div> 
        </td>

        <td className="border-r-2 border-gray-200  pr-1 pl-1">
        <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.ClientName} <br /> ({item.ClientTaxNumber})
         </div> 
        </td>
        <td className="border-r-2 border-gray-200  pr-1 pl-1">
        <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.ContractName}
         </div> 
        </td>
        <td className="border-r-2 border-gray-200  pr-1 pl-1">
        <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.SecondDocumentName}: {item.SecondDocumentNumber} -
          {item.SecondDocumentDate}
         </div> 
        </td>
        <td className="border-r-2 border-gray-200  pr-1 pl-1">
        <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.DocumentCurrencyName} <br /> ({item.DocumentCurrencyRate})
         </div> 
        </td>
        <td className="border-r-2 border-gray-200  pr-1 pl-1">
        <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.DocumentTotalAmountVal} <br /> ({item.DocumentTotalAmount})
         </div> 
        </td>
        <td className="border-r-2 border-gray-200  pr-1 pl-1">
        <div className={item.isDelete ? textStyleDocIsDeleted : textStyleDocNormal}>
          {item.Comments}
         </div> 
        </td>

        <td className="border-l-2 border-gray-200 ">
          <button type="button">
            <RiDeleteBin2Line className="w-6 h-6 mt-1  text-gray-500 hover:text-red-600" />
          </button>
        </td>
      </tr>
    );
  });

  const [searchInput, setSearchInput] = useState(" ");

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
          <h2 className="ml-2 text-[#002060] text-lg font-bold">
            Purchase Documents List
          </h2>

          <div className="flex flex-1 p-2 w-full">
            <div className="pr-2">
              <Link to="/clients/new" rel="stylesheet">
                <button
                  className=" hover:bg-gray-400 hover:text-white  border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center"
                >
                  <AiOutlinePlusCircle className="fill-current w-6 h-6 mr-1 text-green-600" />
                  <span>Новый</span>
                </button>
              </Link>
            </div>

            <div className="pr-2">
              <button
                className=" hover:bg-gray-400 hover:text-white  border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center "
              >
                <IoMdCopy className="fill-current w-6 h-6 mr-1 " />
                <span>Создать копию</span>
              </button>
            </div>

            <div className="pr-2">
              <button
                className="hover:bg-gray-400 hover:text-white border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center "
              >
                <RiFindReplaceLine className="fill-current w-6 h-6 mr-1 text-[#002060] " />
                <span>Поиск</span>
              </button>
            </div>

            <div
              className="w-1/3 justify-between bg-gray-100
            text-gray-500 first-line:font-bold  rounded  inline-flex items-center "
            >
              <RiFindReplaceLine className="fill-current ml-2 w-4 h-4 mr-1 text-gray-500" />
              <input
                name="searchInputName"
                className="mr-1 w-full bg-gray-100 border-none focus:outline-none"
                placeholder="Введите для поиска..."
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              ></input>

              <button
                type="button"
                className="mr-1 ml-2 text-gray-900  hover:text-[#002060] "
                onClick={(event) => setSearchInput((event.target.value = ""))}
              >
                <AiOutlineCloseCircle className=" w-6 h-6 mr-1 text-gray-500" />
              </button>
            </div>

            <div className=" flex ml-2 justify-center">
              <button>
                <BsCalendar2Date className="fill-current w-6 h-6 mr-1 text-[#002060]" />
              </button>
            </div>

            <div
              className="border-[#002060] border-[1px] ml-2 focus:outline-none
              text-[#002060] first-line:font-bold py-0 px-2 rounded inline-flex items-center "
            >
              на странице:
              <select
                className=" focus:outline-none
              text-[#002060] first-line:font-bold py-0 px-1 rounded inline-flex items-center "
              >
                <option value="">14</option>
                <option value="">10</option>
              </select>
              <div className="ml-2">
                Страниц:
                <select
                  className=" focus:outline-none
              text-[#002060] first-line:font-bold py-0 px-1 rounded inline-flex items-center "
                >
                  <option value="">14</option>
                  <option value="">10</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 flex rounded-t-md m-2">
            <table className="table w-auto ">
              <thead className="border-b-2 border-gray-200 text-[#002060]">
                <tr>
                  <th> </th>
                  <th className={thStyle}></th>
                  <th className={thStyle}>Дата запрета</th>
                  <th className={thStyle}>Код</th>
                  <th className={thStyle}>Документ</th>
                  <th className={thStyle}>Организация</th>
                  <th className={thStyle}>
                    Контрагент <br /> (ИНН)
                  </th>
                  <th className={thStyle}>Договор</th>
                  <th className={thStyle}>Доп.документ</th>
                  <th className={thStyle}>
                    Валюта <br />
                    (курс)
                  </th>
                  <th className={thStyle}>Сумма (экв. в AZN)</th>
                  <th className={thStyle}>Комментарии</th>
                  <th> </th>
                  {/*  Колонка для кнопок Таб.части. */}
                  <th> </th>
                  {/*  ** */}
                </tr>
              </thead>
              <tbody className=" border-2 text-sm border-solid border-gray-200 bg-white ">
                {resultApi}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDocumentsList;
