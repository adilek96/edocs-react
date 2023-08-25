import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetStocksQuery } from "../../../redux/stocksApi";
import { useUpdateStocksMutation } from "../../../redux/stocksApi";

//импорт компонентов
import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/topBar";

//импорт иконок
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FcOpenedFolder } from "react-icons/fc";
import { RiDeleteBin2Line, RiFindReplaceLine } from "react-icons/ri";

// переменные со стилями
const textStyleDocIsDeleted = "line-through text-red-900";
const textStyleDocNormal = "";

const StocksList = () => {
  //стейты
  const [dataFromApi, setDataFromApi] = useState([]); // полученные данные из rtk api
  const [searchFlag, setSearchFlag] = useState(false); // флаг выбора отрисовки данных
  const [filteredData, setFilteredData] = useState([]); // для отфильтрованных данных
  const [searchInput, setSearchInput] = useState(""); // для поиска
  const [limitPerPage, setLimitPerPage] = useState(); // для пагинации

  const { data = [], isLoading } = useGetStocksQuery(limitPerPage, {
    staleTime: 0,
  }); // для получения данных из апи с помощью rtk

  useEffect(() => {
    setDataFromApi([...data]);
  }, [data]);

  const [updateStocks] = useUpdateStocksMutation(); // для мутации  обновления апи

  // функция для фильтрации данных на основе поискового запроса
  const performSearch = () => {
    // cначала меняем стейт-флаг в зависемости от стейта-инпута
    if (searchInput.length === 0) {
      setSearchFlag(false);
    } else {
      setSearchFlag(true);
    }
    // фильтруем данные полученые из апи и записываем их в стейт отфильтрованных данных
    const newFilteredData = dataFromApi.filter(
      (item) =>
        item.parent.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.code.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.type.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.responsPerson.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.organization.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  // переменная для выведения данных, в зависемости  от стейт-флага будет выбиратся что запишется в переменную
  let fil = !searchFlag ? dataFromApi : filteredData;

  // вызов функцию для обновления isDeleted
  const deletedCheck = (item) => {
    //cначала находим соответствующий обьект из стейта dataFromApi
    const index = dataFromApi.findIndex((el) => el.id === item.id);
    if (index !== -1) {
      const updatedElem = { ...dataFromApi[index], isDeleted: !item.isDeleted };
      const updatedData = [...dataFromApi];
      updatedData[index] = updatedElem;
      setDataFromApi(updatedData); // изменяем стейт dataFromApi с измененными значениями

      // далее отправляем  изменения в апи
      const sendApi = async () => {
        const sendingData = {
          id: item.id,
          isDeleted: !item.isDeleted,
        };
        await updateStocks(sendingData);
      };
      sendApi();
    }
  };

  // ------------------------------ функция отображения начинки страницы --------------------------------------------------
  if (isLoading) return <h1>Loading....</h1>;
  let resultApi = fil.map(function (item) {
    return (
      <tr
        className="border-b-2 border-gray-200 text-[#002060] text-center"
        key={item.code}
      >
        {/* ------------------------------Группа--------------------------------- */}
        <td className="border-r-2 border-gray-200  pl-1 underline cursor-pointer">
          <div
            className={
              item.isDeleted ? textStyleDocIsDeleted : textStyleDocNormal
            }
          >
            {item.parent}
          </div>
        </td>
        {/* ------------------------------Код--------------------------------- */}
        <td className="border-r-2 border-gray-200  pl-1">
          <div
            className={
              item.isDeleted ? textStyleDocIsDeleted : textStyleDocNormal
            }
          >
            {item.code}
          </div>
        </td>
        {/* ------------------------------Наименование--------------------------------- */}
        <td className="border-r-2 border-gray-200  pl-1 underline cursor-pointer">
          <div
            className={
              item.isDeleted ? textStyleDocIsDeleted : textStyleDocNormal
            }
          >
            <Link to={item.code}>{item.name}</Link>
          </div>
        </td>
        {/* ------------------------------Тип склада--------------------------------- */}
        <td className="border-r-2 border-gray-200  pl-1">
          <div
            className={
              item.isDeleted ? textStyleDocIsDeleted : textStyleDocNormal
            }
          >
            {item.type}
          </div>
        </td>
        {/* ------------------------------Ответственное лицо--------------------------------- */}
        <td className="border-r-2 border-gray-200  pl-1">
          <div
            className={
              item.isDeleted ? textStyleDocIsDeleted : textStyleDocNormal
            }
          >
            {item.responsPerson}
          </div>
        </td>
        {/* ------------------------------Организация--------------------------------- */}
        <td className="border-r-2 border-gray-200  pl-1">
          <div
            className={
              item.isDeleted ? textStyleDocIsDeleted : textStyleDocNormal
            }
          >
            {item.organization}
          </div>
        </td>
        {/* ------------------------------Кнопка удаления--------------------------------- */}
        <td className="border-l-2 border-gray-200 ">
          <button
            type="button"
            onClick={() => {
              deletedCheck(item);
            }}
          >
            <RiDeleteBin2Line className="w-6 h-6 mt-1  text-gray-500 hover:text-red-600" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      {/* -----------------------------------------------------отображение верхнего меню (шапки)----------------------------------------------------------- */}
      <div className="sticky">
        <TopBar />
      </div>
      <div className="flex flex-1">
        {/* -----------------------------------------------------отображение бокового меню----------------------------------------------------------- */}
        <div className=" w-[10%] ">
          <Sidebar />
        </div>
        <div className="p-2 w-full">
          {/* -----------------------------------------------------отображение заголовка----------------------------------------------------------- */}
          <h2 className="ml-2 text-[#002060] text-lg font-bold">Stoks List</h2>
          {/* -----------------------------------------------------отображение кнопки добавления---------------------------------------------------------- */}
          <div className="flex flex-1 p-2 w-full">
            <div className="pr-2">
              <Link to="/stocks/new" rel="stylesheet">
                <button
                  className=" hover:bg-gray-400 hover:text-white  border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center xl:w-[190px] md:w-[150px] sm:w-[130px]"
                >
                  <AiOutlinePlusCircle className="fill-current w-6 h-6 mr-1 text-green-600" />
                  <span className="xl:text-[16px] md:text-[14] sm:text-[12px]">
                    Создать новый
                  </span>
                </button>
              </Link>
            </div>

            {/* -----------------------------------------------------отображение кнопки создание группы----------------------------------------------------------- */}
            <div className="pr-2">
              <button
                className=" hover:bg-gray-400 hover:text-white  border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center xl:w-[190px] md:w-[150px] sm:w-[130px]"
              >
                <FcOpenedFolder className="fill-current w-6 h-6 mr-1 text-green-600" />
                <span className="xl:text-[16px] md:text-[14] sm:text-[12px]">
                  Создать группу
                </span>
              </button>
            </div>
            {/* -----------------------------------------------------отображение кнопки поиска----------------------------------------------------------- */}
            <div className="pr-2">
              <button
                className="hover:bg-gray-400 hover:text-white border-[#002060] border-[1px]
                text-gray-500 first-line:font-bold py-1 px-3 rounded inline-flex items-center xl:w-[100px] md:w-[90px] sm:w-[80px]"
                onClick={performSearch}
              >
                <RiFindReplaceLine className="fill-current w-6 h-6 mr-1 text-[#002060] " />
                <span className="xl:text-[16px] md:text-[14] sm:text-[12px]">
                  Поиск
                </span>
              </button>
            </div>
            {/* -----------------------------------------------------отображение инпута поиска----------------------------------------------------------- */}
            <div
              className="xl:w-[300px] md:w-[250px] sm:w-[180px] justify-between bg-gray-100
            text-gray-500 first-line:font-bold  rounded  inline-flex items-center "
            >
              <RiFindReplaceLine className="fill-current ml-2 w-4 h-4 mr-1 text-gray-500" />
              <input
                name="searchInputName"
                className="mr-1 w-full bg-gray-100 border-none focus:outline-none "
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
            {/* -----------------------------------------------------отображение пагинации----------------------------------------------------------- */}
            <div
              className="border-[#002060] border-[1px] ml-2 focus:outline-none
              text-[#002060] first-line:font-bold py-0 px-2 rounded inline-flex items-center xl:text-[16px] md:text-[14] sm:text-[12px]"
            >
              на странице:
              <select
                className=" focus:outline-none text-[#002060] first-line:font-bold py-0 px-1 rounded inline-flex items-center "
                value={limitPerPage}
                onChange={(event) => setLimitPerPage(event.target.value)}
              >
                <option
                  className="xl:text-[16px] md:text-[14] sm:text-[12px]"
                  value=""
                >
                  all
                </option>
                <option
                  className="xl:text-[16px] md:text-[14] sm:text-[12px]"
                  value="1"
                >
                  1
                </option>
                <option
                  className="xl:text-[16px] md:text-[14] sm:text-[12px]"
                  value="2"
                >
                  2
                </option>
                <option
                  className="xl:text-[16px] md:text-[14] sm:text-[12px]"
                  value="10"
                >
                  10
                </option>
              </select>
              <div className="ml-2 xl:text-[16px] md:text-[14] sm:text-[12px]">
                Страниц:
                <select
                  className=" focus:outline-none
              text-[#002060] first-line:font-bold py-0 px-1 rounded inline-flex items-center "
                >
                  <option
                    className=" xl:text-[16px] md:text-[14] sm:text-[12px]"
                    value=""
                  >
                    14
                  </option>
                  <option
                    className=" xl:text-[16px] md:text-[14] sm:text-[12px]"
                    value=""
                  >
                    10
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------отображение таблицы----------------------------------------------------------- */}
          <div className="bg-gray-100 flex rounded-t-md m-2">
            <table className="table w-full mt-4  ">
              <thead className="border-b-2 border-gray-200 text-[#002060]">
                <tr>
                  {/* <th className="">Группа</th> */}
                  <th className="">Группа</th>
                  <th className="">Код</th>
                  <th className="">Наименование</th>
                  <th className="">Тип склада</th>
                  <th className="">Ответственное лицо</th>
                  <th className="">Организация </th>
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

export default StocksList;
