//***Это форма с Закладками. в ней расположены переходы на другие страницы модуля. */

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import TopBar from "../../../components/topBar/topBar";
import Sidebar from "../../../components/sidebar/Sidebar";

import { Link, useLocation } from "react-router-dom";

import { HrModuleLinks } from "../../../data/HrModuleLinks";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  //////Определяем текущую локацию страницы.
  const location = useLocation();

  ///// Zaqrujaem massiv iz API HrModuleLinks.

  const [objArr, setobjArr] = React.useState([]);

  //Добавляем обработчик событий useEffect.
  React.useEffect(() => {
    if (location.pathname === "/hr_documents") {
      // Данные берем из ContactPersonsFromClientsAPI, так как в одной таблице
      // может быть несколько контактных лиц относящихся к одному клиенту, делаем отбор по
      //   уникальному реквизиту parentClientCode.

      setobjArr([...objArr, HrModuleLinks]);
    }
  }, []);

  /////////////////////////////////////////////////////////

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="sticky">
        <TopBar />
      </div>

      <div className="flex flex-1">
        <div className=" w-[10%] ">
          <Sidebar />
        </div>
        <div className="w-full">
          <span className="ml-4 mt-4"></span>

          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="">
                  <Tab label="Основные" value="1" />
                  <Tab label="Дополнительные" value="2" />
                  <Tab label="Отчеты" value="3" />
                </TabList>
              </Box>

              {/* Тут заполняем список модулей */}
              {objArr.map((obj) => (
                <TabPanel key={obj.pageLink} value={obj.value}>
                  <Link to={obj.pageLink}>{obj.pageLinkName}</Link>
                </TabPanel>
              ))}
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
}
