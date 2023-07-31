import React, { useState } from "react";
import { useGetGoodsQuery } from "../../../redux";

import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/topBar";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";
import { RiDeleteBin2Line, RiFindReplaceLine } from "react-icons/ri";

import { Link } from "react-router-dom";



const ProductsList = () => {
  const [searchInput, setSearchInput] = useState(null);


  //**"Запрашиваем сколько строк товаров хотим получить из базы." */
  const [limitPerPage, setLimitPerPage] = useState(null);

  const { data = [], isLoading } = useGetGoodsQuery(limitPerPage);
 
  
  if (isLoading) return <h1>Loading....</h1>;

  console.log(data)
  
  const dataFromApi = [...data];

  let resultApi = dataFromApi.map(function(item) {
      return(
        <tr
        className="border-b-2 border-gray-200 text-[#002060] text-center"
        key={item.code}
      >
        <td className="border-r-2 border-gray-200  pl-1 underline cursor-pointer">
          {item.parent}
        </td>
  
        <td className="border-r-2 border-gray-200  pl-1">
          {item.code}
        </td>
  
        <td className="border-r-2 border-gray-200  pl-1 underline cursor-pointer">
          <Link to={item.code}>{item.name}</Link>
        </td>
        <td>{item.type}</td>
        <td className="border-l-2 border-gray-200 ">
          <button type="button">
            <RiDeleteBin2Line className="w-6 h-6 mt-1  text-gray-500 hover:text-red-600" />
          </button>
        </td>
      </tr>
      )
  });



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
            Products List
          </h2>

          <div className="flex flex-1 p-2 w-full">
            <div className="pr-2">
              <Link to="/products/new" rel="stylesheet">
                <button
                  className=" hover:bg-gray-400 hover:text-white  border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center"
                >
                  <AiOutlinePlusCircle className="fill-current w-6 h-6 mr-1 text-green-600" />
                  <span>Создать нового</span>
                </button>
              </Link>
            </div>

            <div className="pr-2">
              <button
                className=" hover:bg-gray-400 hover:text-white  border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center "
              >
                <FcOpenedFolder className="fill-current w-6 h-6 mr-1 text-green-600" />
                <span>Создать группу</span>
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

            <div
              className="border-[#002060] border-[1px] ml-2 focus:outline-none
              text-[#002060] first-line:font-bold py-0 px-2 rounded inline-flex items-center "
            >
              на странице:
              <select
                className=" focus:outline-none text-[#002060] first-line:font-bold py-0 px-1 rounded inline-flex items-center "
                value={limitPerPage}
                onChange={(event) => setLimitPerPage(event.target.value)}
              >
                <option value="">all</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="10">10</option>
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
            <table className="table w-full mt-4  ">
              <thead className="border-b-2 border-gray-200 text-[#002060]">
                <tr>
                  {/* <th className="">Группа</th> */}
                  <th className="">Группа</th>
                  <th className="">Код</th>
                  <th className="">Наименование</th>
                  <th className="">Тип номенклатуры</th>
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

export default ProductsList;
