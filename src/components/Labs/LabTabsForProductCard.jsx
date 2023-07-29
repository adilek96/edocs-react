//***Это форма с Закладками. в ней расположены переходы на другие страницы модуля. */

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProductBarCodes from "../Tables/ProductBarCodes";
// import { useLocation } from "react-router-dom";

export default function LabTabsForProductCard() {
  const [value, setValue] = React.useState("1");

  //////Определяем текущую локацию страницы.
  // const location = useLocation();

  ///// Zaqrujaem massiv iz API HrModuleLinks.

  // const [objArr, setobjArr] = React.useState([]);

  // //Добавляем обработчик событий useEffect.
  // React.useEffect(() => {
  //   if (location.pathname === "/hr_documents") {
  //     // Данные берем из ContactPersonsFromClientsAPI, так как в одной таблице
  //     // может быть несколько контактных лиц относящихся к одному клиенту, делаем отбор по
  //     //   уникальному реквизиту parentClientCode.

  //     setobjArr([...objArr, HrModuleLinks]);
  //   }
  // }, []);

  /////////////////////////////////////////////////////////

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex flex-1">
        <div className="w-full">
          <span className="ml-4 mt-2"></span>

          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="">
                  <Tab label="Основная информация" value="1" />
                  <Tab label="Дополнительно" value="2" />
                  <Tab label="Состав" value="3" />
                  <Tab label="Характеристика" value="4" />
                  <Tab label="Штрих-код" value="5" />
                </TabList>
              </Box>

            
            
              <TabPanel value="1">
                <span className=" text-[#002060]">Vergi kodu:</span>
                <input type="number" name="productTaxesCode" id="productTaxesCode" 
                className="ml-2 pl-1 text-amber-900 border rounded-md w-[10rem] 
                focus:outline-none  focus:border-blue-900 placeholder:font-thin italic"/>
              </TabPanel>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="5">
                <ProductBarCodes />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
}
