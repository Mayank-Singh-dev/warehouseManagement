
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";
import Warehouselist from "./components/warehouselist/Warehouselist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Warehouselist />} />
          <Route path="/details/:warehouseId" element={<WarehouseDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
