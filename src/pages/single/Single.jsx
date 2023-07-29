import React from "react";
import TopBar from "../../components/topBar/topBar";
import Sidebar from "../../components/sidebar/Sidebar";

import { MdOutlineDone, MdOutlineCancel, MdOutlineSave } from "react-icons/md";

const Single = () => {
  return (
    <div>
      <div className="sticky">
        <TopBar />
      </div>

      <div className="flex flex-1">
        <div className=" w-[10%] ">
          <Sidebar />
        </div>

        <div className="p-4 flex w-[90%] min-w-[90%]">
          <div className="border text-gray-600 rounded-md w-full min-w-full">
            <h1 className="title pl-4 pt-4 font-bold text-[#002060]  ">
              User Information
            </h1>

            <div className=" bg-white flex p-4 border-b-2 ">
              <div className="pr-2 ">
                <button
                  type="submit"
                  id="btnSubmit"
                  className="border-2 rounded-lg w-24 h-8
               hover:bg-green-500 hover:text-white flex items-center justify-center"
                >
                  <MdOutlineDone size={20} />
                  OK
                </button>
              </div>

              <div className="pr-2 ">
                <button
                  type="save"
                  id="btnSave"
                  className="border-2 rounded-lg w-28 h-8 hover:bg-gray-500 hover:text-white flex items-center justify-center"
                >
                  <MdOutlineSave size={20} className=" mr-1" /> Save
                </button>
              </div>

              <div className="pr-2 ">
                <button
                  type="cancel"
                  id="btnCancel"
                  className="border-2 rounded-lg w-28 h-8 hover:bg-red-500 hover:text-white flex items-center justify-center"
                >
                  <MdOutlineCancel size={20} className=" mr-1" /> Cancel
                </button>
              </div>

              <div></div>
            </div>

            <div className="p-4">
              <div>
                <span className="text-[#002060]">Username: </span>
                <input
                  type="email"
                  name="usrEmail"
                  id="usrEmail"
                  placeholder="John@gmail.com"
                  className="text-amber-900 border rounded-md w-[23rem] pl-1 focus:outline-none  focus:border-blue-900
                  laceholder:font-thin italic"
                />
                <div className="mt-4">
                  <span className="text-[#002060]">Password: </span>
                  <input
                    type="password"
                    name="usrPassword"
                    id="usrPassword"
                    placeholder="Enter your pass. (min.5 - max.15). Example: Aa123!@#"
                    className="ml-2 text-amber-900 border rounded-md w-[23rem] pl-1 
                    focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[#002060]">Language: </span>
                  <select
                    name="usrInterfaceLang"
                    id="usrInterfaceLang"
                    className="ml-2 text-amber-900 border rounded-md w-[23rem] pl-1 
                  focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                  >
                    <option className="text-[#002060]" value="">
                      --Please choose an interface language--
                    </option>
                    <option value="Azərbaycanca">Azərbaycanca</option>
                    <option value="Русский">Русский</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div className="mt-10">
                  <label className="flex pb-4 text-[#002060] font-semibold"> User's personal information</label>
                  <div>
                    <span className="text-[#002060]">Full name: </span>
                    <input
                      type="test"
                      name="usrFullName"
                      id="usrFullName"
                      placeholder="John Doeh"
                      className="ml-2 text-amber-900 border rounded-md w-[23rem] pl-1 
                    focus:outline-none  focus:border-blue-900 placeholder:font-thin italic "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
