
import React, { useState } from 'react';
import "./Warehouselist.css";
import { useSelector } from 'react-redux'; 
import WarehouseNav from "./warehousenav/WarehouseNav";
import { Link } from "react-router-dom";
import './Warehouselist.css';

const Warehouselist = () => {
  const [filterCluster, setFilterCluster] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterType, setFilterType] = useState(""); 
  const [sortOption, setSortOption] = useState("default");
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  const warehouseData = useSelector((state) => state.warehouse.warehouseData);
  console.log("Warehouse Data:", warehouseData);
  const filteredWarehouses = warehouseData
    .filter(
      (warehouse) =>
        (selectedWarehouse ? warehouse.id === selectedWarehouse.id : true) &&
        (!filterCluster || warehouse.cluster === filterCluster) &&
        (!filterCity || warehouse.city === filterCity) &&
        (!filterType || warehouse.type === filterType) 
    )
    .sort((a, b) => {
      if (sortOption === "space_available_desc") {
        return b.space_available - a.space_available;
      } else if (sortOption === "space_available_asc") {
        return a.space_available - b.space_available;
      }
      return a.id - b.id;
    });

  return (
    <main className="warehouses">
      <WarehouseNav
        setFilterCluster={setFilterCluster}
        setFilterCity={setFilterCity}
        setFilterType={setFilterType} 
        setSortOption={setSortOption}
        setSelectedWarehouse={setSelectedWarehouse}
      />
      <div className="Warehouse-main">
        {filteredWarehouses.map((warehouse) => (
          <div className="warehouseInfo" key={warehouse.id}>
            <h2 className="warehouseName">{warehouse.name}</h2>
            <div className="tableContainer">
              <div className="leftColumn">
                <p className="WarehouseDetails">Warehouse Code:</p>
                <p className="WarehouseDetails">City:</p>
                <p className="WarehouseDetails">Space Available:</p>
                <p className="WarehouseDetails">Type:</p>
                <p className="WarehouseDetails">Cluster:</p>
                <p className="WarehouseDetails">Is Registered:</p>
                <p className="WarehouseDetails">Is Live:</p>
              </div>
              <div className="rightColumn">
                <p className="WarehouseDetails">{warehouse.code}</p>
                <p className="WarehouseDetails">{warehouse.city}</p>
                <p className="WarehouseDetails">{warehouse.space_available}</p>
                <p className="WarehouseDetails">{warehouse.type}</p>
                <p className="WarehouseDetails">{warehouse.cluster}</p>
                <p className="WarehouseDetails">
                  {warehouse.is_registered ? "Yes" : "No"}
                </p>
                <p className="WarehouseDetails">
                  {warehouse.is_live ? "Yes" : "No"}
                </p>
              </div>
            </div>
            <Link
              to={{
                pathname: `/details/${warehouse.id}`,
                state: { warehouse }
              }}
              className="EditLink"
            >
              <button className="EditInfoButton">Edit Info</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Warehouselist;
