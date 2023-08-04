// import React, { useState } from "react";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { RiDeleteBin2Line } from "react-icons/ri";


// //  Тут живут ОБЩИЕ стили дизайна.
// const tblColumnStyle = "border-r-[1px] border-gray-200  pl-1";
// //////////////////////////////////////////////////////////////////////////

// export default function ProductBarCodes({prodname}) {
//   //**"Запрашиваем сколько строк товаров хотим получить из базы." */
//   const [limitPerPage, setLimitPerPage] = useState("");
 

//   const [rowNumber, setRowNumber] = useState(0);

//   // const { data = [], isLoading } = useGetProductBarcodeQuery(limitPerPage);

//   // if (isLoading) return <h1>Loading....</h1>;

//   return (
//     <div>
//       <div className=" flex flex-col rounded-t-md  border-[1px] ">
//         <h2 className="text-[#002060] text-start p-4">Штрих-коды:</h2>
//         <div className=" border-b-[1px] border-t-[1px]  w-full border-gray-200">
//           <div className=" flex items-center pl-2 text-amber-900 border-b-[1px] border-gray-200  laceholder:font-thin italic">
//             <input
//               className="pl-1 mr-2 w-1/4 border rounded-md focus:outline-none  focus:border-blue-900"
//               type="number"
//               name="productBarCode"
//               // value={formInput.clientPersonName}
//               // onChange={handleInputChange}
//               placeholder="Enter Barcode..."
//             />

//             {/* Это кнопка добавления строки в таблицу Контактные лица контрагента. */}
//             <button
//               type="button"
//               // onClick={insertRowToTable}
//               className=" m-1 border-[1px] border-solid flex bg-zinc-100 w-[12%]
//                             border-[#002060] rounded-md text-green-500 hover:text-[#002060]"
//             >
//               <IoMdAddCircleOutline className="w-6 h-6" />
//               <span className="text-[#002060] mr-2 ml-2 hover:text-green-500">
//                 Add item
//               </span>
//             </button>
//             {/* ////////////////////////////// */}
//             <div
//               className="border-[#002060] border-[1px] ml-2 focus:outline-none
//               text-[#002060] first-line:font-bold py-0 px-2 rounded inline-flex items-center "
//             >
//               на странице:
//               <select
//                 className=" focus:outline-none text-[#002060] first-line:font-bold py-0 px-1 rounded inline-flex items-center "
//                 value={limitPerPage}
//                 onChange={(event) => setLimitPerPage(event.target.value)}
//               >
//                 <option value="">all</option>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="10">10</option>
//               </select>
//               <div className="ml-2">
//                 Страниц:
//                 <select
//                   className=" focus:outline-none
//               text-[#002060] first-line:font-bold py-0 px-1 rounded inline-flex items-center "
//                 >
//                   <option value="">14</option>
//                   <option value="">10</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* **Это табличная часть. Контактные лица контрагента */}
//         <table className="table w-full ">
//           <thead className="border-b-[1px] border-gray-200 text-[#002060] ">
//             <tr>
//               <th className="">#</th>
//               <th className="">Barcode</th>

//               {/*  Колонка для кнопок Таб.части. */}
//               <th> </th>
//               {/*  ** */}
//             </tr>
//           </thead>

//           <tbody className="border-b-[1px] border-t-[1px] text-sm border-solid border-gray-200 bg-white ">
//             {data.map((item) => (
//               <tr className="border-b-[1px] border-gray-200 text-[#002060] text-center">
//                 <td className={tblColumnStyle} key={item.id}>
//                 {rowNumber+1}
//                 </td>

//                 <td className={tblColumnStyle}>{item.barcode}</td>
//                 <td className="border-l-2 border-gray-200 ">
//                   <button type="button">
//                     <RiDeleteBin2Line className="w-6 h-6 mt-1  text-gray-500 hover:text-red-600" />
//                   </button>
//                 </td>
//               </tr>
//             ))}


//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
