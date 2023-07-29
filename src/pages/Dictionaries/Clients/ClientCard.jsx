import React, { useEffect, useState } from "react";

import Sidebar from "../../../components/sidebar/Sidebar";
import TopBar from "../../../components/topBar/topBar";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";

import { dataFromClientsAPI } from "../../../data/dataClientsApi";

import { useParams } from "react-router-dom";
import { ContactPersonsFromClientsAPI } from "../../../data/ContactPersonsFromClientsAPI";

//  Тут живут ОБЩИЕ стили дизайна.
const btnSubmitStyle =
  "hover:bg-green-400 hover:text-white border-[#002060] border-[1px] text-[#002060] first-line:font-bold py-1 px-6 rounded-lg inline-flex items-center";
const btnSaveStyle =
  "hover:bg-gray-400 hover:text-white border-[#002060] border-[1px] text-[#002060] first-line:font-bold py-1 px-6 rounded-lg inline-flex items-center";
const btnCancelStyle =
  "hover:bg-red-400 hover:text-white border-[#002060] border-[1px] text-[#002060] first-line:font-bold py-1 px-6 rounded-lg inline-flex items-center";

const tblColumnStyle = "border-r-[1px] border-gray-200  pl-1";
//////////////////////////////////////////////////////////////////////////

const ClientCard = () => {
  const { clientID } = useParams();

  const [contactPersonRows, setContactPersonRows] = useState([]);

  const [formInput, setFormInput] = useState({
    clientPersonName: "",
    clientPersonPosition: "",
    clientPersonEmail: "",
    clientPersonPhoneNumber: "",
  });

  //Добавляем обработчик событий useEffect.
  useEffect(() => {
    if (clientID !== undefined) {
      // Данные берем из ContactPersonsFromClientsAPI, так как в одной таблице
      // может быть несколько контактных лиц относящихся к одному клиенту, делаем отбор по
      //   уникальному реквизиту parentClientCode.

      const selectedPersons = ContactPersonsFromClientsAPI.filter(function (
        item
      ) {
        return item.parentClientCode === clientID;
      });
      setContactPersonRows(selectedPersons);
    }
  }, [clientID]);
  ///////////////////////////////////////
  //**Это добавление в табличную часть. */
  const handleInputChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value,
    });
  };

  const insertRowToTable = () => {
    console.log(formInput);
    const newArr = [...contactPersonRows, formInput];
    setContactPersonRows(newArr);

    /////***Очищаем поля после того как нажали по кнопке добавить. */
    setFormInput({
      clientPersonName: "",
      clientPersonPosition: "",
      clientPersonEmail: "",
      clientPersonPhoneNumber: "",
    });
  };

  //////////////////////////
  //** Это получение данных из API файла с клиентами. */
  const dataFromClients = dataFromClientsAPI.find(function (item) {
    return item.code === clientID;
  });

  function returndataFromClients() {
    if (dataFromClients !== undefined) {
      return dataFromClients;
    }
    return "";
  }

  ////////////////////
  //**Тут работаем с полями Input основной формы */
  const [clientNameInput, setClientNameInput] = useState(
    returndataFromClients().name
  );
  const [clientTaxNumberInput, setclientTaxNumberInput] = useState(
    returndataFromClients().taxNumber
  );

  ////////////////////////////////////

  //**Проставляем заголовок страницы. */
  function h1Title(clientID) {
    if (clientID === undefined) {
      return (
        <h1 className="title pl-4 pt-4 font-bold text-[#002060]">
          "New client * (Creating)"
        </h1>
      );
    }
    return (
      <h1 className="title pl-4 pt-4 font-bold text-[#002060]">
        ({returndataFromClients().code}) {returndataFromClients().name} *
        (Редактирование)
      </h1>
    );
  }

  return (
    <div>
      <div className="sticky">
        <TopBar />
      </div>

      <div className="flex flex-1">
        <div className=" w-[10%] ">
          <Sidebar />
        </div>

        <form className="p-4 flex w-[90%] min-w-[90%]">
          <div className="border text-gray-600 rounded-md w-full min-w-full">
            {h1Title(returndataFromClients().code)}

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
                  <span className="text-[#002060] mr-2">Name: </span>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="John MMC"
                    className="text-amber-900 border rounded-md w-[84%] pl-1 focus:outline-none  focus:border-blue-900 laceholder:font-thin italic"
                    value={clientNameInput}
                    onChange={(event) => setClientNameInput(event.target.value)}
                  />
                </div>
                <div className="flex pt-2 justify-between">
                  <div className="text-[#002060] ">
                    <span className="text-[#002060]">VOEN: </span>
                    <input
                      type="number"
                      name="clientTaxNumber"
                      id="clientTaxNumber"
                      className="ml-2 pl-1 text-amber-900 border rounded-md w-32 
                            focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                      value={clientTaxNumberInput}
                      onChange={(event) =>
                        setclientTaxNumberInput(event.target.value)
                      }
                    />
                  </div>
                  <div>
                    <span className="text-[#002060]">Status: </span>
                    <select
                      name="usrInterfaceLang"
                      id="usrInterfaceLang"
                      className=" text-amber-900 border rounded-md w-32 pl-1 
                              focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                    >
                      <option className="text-[#002060]" value="Resident">
                        Rezident
                      </option>
                      <option className="text-[#002060]" value="NonResident">
                        Xarici
                      </option>
                    </select>
                  </div>
                </div>
                <div></div>
              </div>

              <div className="flex flex-col pl-4">
                <div>
                  <span className="text-[#002060]">Növü: </span>
                  <select
                    name="usrInterfaceLang"
                    id="usrInterfaceLang"
                    className=" text-amber-900 border rounded-md w-32 pl-1 
                      focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                  >
                    <option
                      className="text-[#002060]"
                      value={returndataFromClients().clientType}
                    >
                      {returndataFromClients().clientType}
                    </option>

                    <option className="text-[#002060]" value="Fisical">
                      {" "}
                      Fiziki şəxs
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <div>
                  <span className="text-[#002060]">Code: </span>
                  <input
                    type="number"
                    disabled
                    name="clientCode"
                    id="clientCode"
                    className="ml-2 pl-1 text-amber-900 border rounded-md w-[10rem] 
                    focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                    value={returndataFromClients().code}
                  />
                </div>

                <div className="pt-2">
                  <span className="text-[#002060]">Группа:</span>
                  <input
                    type="text"
                    disabled
                    name="clientGroupName"
                    id="clientGroupName"
                    className="ml-2 pl-1 text-amber-900 border rounded-md w-[10rem] 
                    focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                    value={"Покупатели"}
                  />
                </div>
              </div>
            </div>
            <div className=" flex flex-col rounded-t-md  border-[1px] m-4">
              <h2 className="text-[#002060] text-start p-4">
                Контактные лица контрагента:
              </h2>
              <div className=" border-b-[1px] border-t-[1px]  w-full border-gray-200">
                <div className=" flex items-center pl-2 text-amber-900 border-b-[1px] border-gray-200  laceholder:font-thin italic">
                  <input
                    className="pl-1 mr-2 w-1/4 border rounded-md focus:outline-none  focus:border-blue-900"
                    type="text"
                    name="clientPersonName"
                    value={formInput.clientPersonName}
                    onChange={handleInputChange}
                    placeholder="Enter Persons name"
                  />
                  <input
                    className="pl-1 mr-2 w-1/4 border rounded-md focus:outline-none  focus:border-blue-900"
                    type="text"
                    name="clientPersonPosition"
                    value={formInput.clientPersonPosition}
                    onChange={handleInputChange}
                    placeholder="Enter Person's position"
                  />
                  <input
                    className="pl-1 mr-2 w-1/4 border rounded-md focus:outline-none  focus:border-blue-900"
                    type="email"
                    name="clientPersonEmail"
                    value={formInput.clientPersonEmail}
                    onChange={handleInputChange}
                    placeholder="Enter Person's e-mail adress"
                  />
                  <input
                    className="pl-1 mr-2 w-1/4 border rounded-md focus:outline-none  focus:border-blue-900"
                    type="text"
                    name="clientPersonPhoneNumber"
                    value={formInput.clientPersonPhoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Person's phone number"
                  />

                  {/* Это кнопка добавления строки в таблицу Контактные лица контрагента. */}
                  <button
                    type="button"
                    onClick={insertRowToTable}
                    className=" m-1 border-[1px] border-solid flex bg-zinc-100 w-[12%]
                            border-[#002060] rounded-md text-green-500 hover:text-[#002060]"
                  >
                    <IoMdAddCircleOutline className="w-6 h-6" />
                    <span className="text-[#002060] mr-2 ml-2 hover:text-green-500">
                      Add item
                    </span>
                  </button>
                  {/* ////////////////////////////// */}
                </div>
              </div>

              {/* **Это табличная часть. Контактные лица контрагента */}
              <table className="table w-full ">
                <thead className="border-b-[1px] border-gray-200 text-[#002060] ">
                  <tr>
                    <th className="">Наименование</th>
                    <th className="">Должность</th>
                    <th className="">E-mail</th>
                    <th>Phone</th>
                    {/*  Колонка для кнопок Таб.части. */}
                    <th> </th>
                    {/*  ** */}
                  </tr>
                </thead>

                <tbody className="border-b-[1px] border-t-[1px] text-sm border-solid border-gray-200 bg-white ">
                  {/* Используем useEffect для заполнения таблицы данными. 
                        Данные берем из ContactPersonsFromClientsAPI, так как в одной таблице 
                        может быть несколько контактных лиц относящихся к одному клиенту. */}

                  {contactPersonRows.map((row) => (
                    <tr
                      className="border-b-[1px] border-gray-200 text-[#002060] text-center"
                      key={row.clientPersonName}
                    >
                      <td className={tblColumnStyle}>{row.clientPersonName}</td>

                      <td className={tblColumnStyle}>
                        {row.clientPersonPosition}
                      </td>

                      <td className="{tblColumnStyle} underline cursor-pointer">
                        {row.clientPersonEmail}
                      </td>
                      <td>{row.clientPersonPhoneNumber}</td>

                      <td className="border-l-2 border-gray-200 ">
                        <button type="button">
                          <RiDeleteBin2Line className="w-6 h-6 mt-1  text-gray-500 hover:text-red-600" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientCard;
