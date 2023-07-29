import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/lists/List";
import Single from "./pages/single/Single";
 import New from "./pages/new/PersonalCard_new";
import PersonalCardNew from "./pages/new/PersonalCard_new";

// import NewClient from "./pages/new/NewClient";
// import SingleClient from "./pages/new/SingleClient";
// import PurchaseDocumentsList from "./pages/lists/PurchaseDocumentsList";

import UsersList from "./pages/Users/UsersList";
import UserCard from "./pages/Users/UserCard";
import LabTabs from "./pages/Payrol/components/LabTabs";

import PayrollList from "./pages/Payrol/List";
import ProductsList from "./pages/Dictionaries/Products/ProductsList";
import ProductCard from "./pages/Dictionaries/Products/ProductCard";
import ClientCard from "./pages/Dictionaries/Clients/ClientCard";
import ClientsList from "./pages/Dictionaries/Clients/ClientsList";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/adminTool/*">
            <Route index element={<UsersList />} />
            <Route path=":userID" element={<Single />} />
            <Route path="new" element={<UserCard />} />
          </Route>

          <Route path="products/*">
            <Route index element={<ProductsList />} />
            <Route path=":productID" element={<ProductCard />} />
            <Route path="new" element={<ProductCard />} />
          </Route>

          <Route path="clients/*">
            <Route index element={<ClientsList />} />
            <Route path=":clientID" element={<ClientCard />} />
            <Route path="new" element={<ClientCard />} />
          </Route>

          <Route path="purchases/*">
          <Route index element={<LabTabs />} />
            {/* <Route index element={<PurchaseDocumentsList />} /> */}
            <Route path=":invoiceID" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="sales_invoices/*">
            <Route index element={<List />} />
            <Route path=":invoiceID" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

          <Route path="hr_documents/*">
            <Route index element={<LabTabs />} />
            <Route path="documents/payroll" element={<PayrollList />} />
            <Route path=":personID" element={<Single />} />
            <Route path="new" element={<PersonalCardNew />} />
          </Route>


          

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
