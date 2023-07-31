import React, { useState } from "react";
import { useGetGoodsQuery } from "../../../redux";
import { useParams } from "react-router-dom";

import TopBar from "../../../components/topBar/topBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { ImList2 } from "react-icons/im";
import LabTabsForProductCard from "../../../components/Labs/LabTabsForProductCard";

//  Тут живут ОБЩИЕ стили дизайна.
const btnSubmitStyle =
  "hover:bg-green-400 hover:text-white border-[#002060] border-[1px] text-[#002060] first-line:font-bold py-1 px-6 rounded-lg inline-flex items-center";
const btnSaveStyle =
  "hover:bg-gray-400 hover:text-white border-[#002060] border-[1px] text-[#002060] first-line:font-bold py-1 px-6 rounded-lg inline-flex items-center";
const btnCancelStyle =
  "hover:bg-red-400 hover:text-white border-[#002060] border-[1px] text-[#002060] first-line:font-bold py-1 px-6 rounded-lg inline-flex items-center";

////////////////////////////////////

//**Проставляем заголовок страницы. */
function h1Title(productID) {
  if (productID === undefined) {
    return (
      <h1 className="title pl-4 pt-4 font-bold text-[#002060]">
        "New goods * (Creating)"
      </h1>
    );
  }
  return (
    <h1 className="title pl-4 pt-4 font-bold text-[#002060]">
      {productID}
      {/* ({returndataFromClients().code}) {returndataFromClients().name} * */}
      (Редактирование)
    </h1>
  );
}

const ProductCard = () => {
  const [file, setFile] = useState(null);
  // const [productName, setProductName] = useState("");
  ////////////////////
  //**Тут работаем с полями Input основной формы */
  const [productNameInput, setProductNameInput] =
    useState();
    // returndataFromGoodsApi().name

  ///// Получаем ID элемента, при открытии страницы.
  const { productID } = useParams();

  //////////////////////////////////////////////////////////////////////////
  //**"Получаем все товары из базы." */

  const [limitPerPage] = useState(null);
  const { data = [], isLoading } = useGetGoodsQuery(limitPerPage);

  //**Показываем что идет загрузка, пока получаем все товары из базы." */
  if (isLoading) return <h1>Loading....</h1>;

  const dataFromApi = [...data];

  //** Это получение данных из API файла с Goods. */
  const findedGoodData = dataFromApi.find((item) => item.code === productID);

  function returndataFromGoodsApi() {
    if (findedGoodData) {
      return findedGoodData;
    }
    return "";
  }
  console.log(findedGoodData);

  const handleProductPictureChange = (event) => {
    setFile(event.target.files[0]);
  };
  // const readFile = () => {
  //   const reader = new FileReader();
  //   reader.onload = () => console.log(reader.result);
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      <TopBar className="sticky" />

      <div className="flex flex-1">
        <div className=" w-[10%] ">
          <Sidebar />
        </div>

        <form className="p-4 flex w-[90%] min-w-[90%]">
          <div className="border text-gray-600 rounded-md w-full min-w-full">
            {h1Title(productID)}

            {/* //*************** Это кнопки Формы */}
            <div className=" bg-white flex p-4 border-b-2 ">
              <div className="pr-2 ">
                <button type="submit" id="btnSubmit" className={btnSubmitStyle}>
                  OK
                </button>
              </div>

              <div className="pr-2 ">
                <button type="save" id="btnSave" className={btnSaveStyle}>
                  Save
                </button>
              </div>

              <div className="pr-2 ">
                <button type="cancel" id="btnCancel" className={btnCancelStyle}>
                  Cancel
                </button>
              </div>
            </div>
            {/* //////////////////////////////////////////////// */}
            <div className="grid grid-cols-3 p-4 justify-between">
              <div className="flex flex-col">
                <div>
                  <span className="text-[#002060] mr-2 ">Name: </span>
                  <input
                    type="text"
                    name="ProductName"
                    id="ProductName"
                    placeholder="Good or service name...."
                    className="text-amber-900 border rounded-md w-[100%] pl-1 focus:outline-none  focus:border-blue-900 laceholder:font-thin italic"
                    value={productNameInput}
                    onChange={(event) =>
                      setProductNameInput(event.target.value)
                    }
                  />
                </div>

                <div className="pt-4">
                  <span className="text-[#002060] mr-2">Name for print: </span>
                  <input
                    type="text"
                    name="ProductName"
                    id="ProductName"
                    placeholder="Good or service name...."
                    className="text-amber-900 border rounded-md w-[100%] pl-1 focus:outline-none  focus:border-blue-900 laceholder:font-thin italic"
                    value={productNameInput}
                    onChange={(event) =>
                      setProductNameInput(event.target.value)
                    }
                  />
                </div>

                <div className="pt-2">
                  <span className="text-[#002060]">Növü: </span>
                  <select
                    name="typeOfProduct"
                    id="typeOfProduct"
                    className=" text-amber-900 border rounded-md w-[100%] pl-1 
                      focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                  >
                    <option className="text-[#002060]">
                      {/* {returndataFromClients().clientType} */}
                    </option>

                    <option className="text-[#002060]" value="1">
                      "Emala alınan/göndərilən ehtiyyatlar"
                    </option>
                  </select>
                </div>
                <div flex className="pt-2">
                  <span className="text-[#002060] mt-4 ">
                    Единица измерения:{" "}
                  </span>
                  <div
                    className="w-[100%] justify-between text-amber-900 first-line:font-bold 
                 border rounded-md   focus:border-blue-900
                 inline-flex items-center  placeholder:font-thin italic"
                  >
                    <input
                      name="searchInputName"
                      className="ml-1 w-full focus:outline-none 
                    focus:border-blue-900"
                      placeholder="Выберите единицу измерения..."
                      // value={searchInput}
                      // onChange={(event) => setSearchInput(event.target.value)}
                    ></input>

                    <button
                      type="button"
                      className=" text-gray-900  hover:text-[#002060] "
                      // onClick={(event) => setSearchInput((event.target.value = ""))}
                    >
                      <ImList2 className="mr-2 w-4 h-4  text-gray-500" />
                    </button>
                  </div>
                </div>

                <div flex className="pt-2">
                  <span className="text-[#002060] mt-4 ">Артикул: </span>
                  <div
                    className="w-[100%] justify-between text-amber-900 first-line:font-bold 
                 border rounded-md   focus:border-blue-900
                 inline-flex items-center  placeholder:font-thin italic"
                  >
                    <input
                      name="searchInputName"
                      className="ml-1 w-full focus:outline-none 
                    focus:border-blue-900"
                      placeholder="Выберите единицу измерения..."
                      // value={searchInput}
                      // onChange={(event) => setSearchInput(event.target.value)}
                    ></input>

                    <button
                      type="button"
                      className=" text-gray-900  hover:text-[#002060] "
                      // onClick={(event) => setSearchInput((event.target.value = ""))}
                    >
                      <ImList2 className="mr-2 w-4 h-4  text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pl-4"></div>

              <div className="flex flex-col">
                <div>
                  <span className="text-[#002060]">Code: </span>
                  <input
                    type="number"
                    disabled
                    name="productId"
                    id="productId"
                    className="ml-2 pl-1 text-amber-900 border rounded-md w-[10rem] 
                    focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                    // value={returndataFromClients().code}
                  />
                </div>

                <div className="pt-2">
                  <span className="text-[#002060] pr-1">Группа:</span>
                  <div
                    className="w-[83%] justify-between text-amber-900 first-line:font-bold 
                 border rounded-md   focus:border-blue-900
                 inline-flex items-center  placeholder:font-thin italic"
                  >
                    <input
                      name="searchInputName"
                      className="ml-1 w-full focus:outline-none 
                    focus:border-blue-900"
                      placeholder="Родитель номенклатуры..."
                      // value={searchInput}
                      // onChange={(event) => setSearchInput(event.target.value)}
                    ></input>

                    <button
                      type="button"
                      className=" text-gray-900  hover:text-[#002060] "
                      // onClick={(event) => setSearchInput((event.target.value = ""))}
                    >
                      <ImList2 className="mr-2 w-4 h-4  text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Kartinka tovara */}
                <div className="mt-5 bg-gray-100 h-48 flex justify-center items-center rounded-md">
                  <div>
                    <MdOutlineAddAPhoto className="h-28 w-28 border-1 rounded-xl cursor-pointer text-gray-300" />
                    <input type="file" onChange={handleProductPictureChange} />
                  </div>
                </div>
                {/* <button onClick={readFile}>Загрузить изображение</button> */}
                {/* /////////////////////////// */}
              </div>
            </div>

            {/* Это закладки"*/}

            <LabTabsForProductCard prodname={productNameInput} />
            {/* /////////////////////////// */}
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductCard;
