
import React, { useState } from "react";
import "./WarehouseNav.css";
import warehouseData from "../../warehouse.json";

const WarehouseNav = ({
  setFilterCluster,
  setFilterCity,
  setFilterType,
  setSortOption,
  setSelectedWarehouse,
}) => {
  const clusters = [
    ...new Set(warehouseData.map((warehouse) => warehouse.cluster)),
  ];
  const cities = [...new Set(warehouseData.map((warehouse) => warehouse.city))];
  const types = [...new Set(warehouseData.map((warehouse) => warehouse.type))];

  const [searchQuery, setSearchQuery] = useState("");
  const [matchingWarehouses, setMatchingWarehouses] = useState([]);
  const [isAllWarehouseClicked, setIsAllWarehouseClicked] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(true);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    if (name === "filterCluster") {
      setFilterCluster(value);
    } else if (name === "filterCity") {
      setFilterCity(value);
    } else if (name === "filterType") {
      setFilterType(value);
    } else if (name === "sortOption") {
      setSortOption(value);
    }
    setIsAllWarehouseClicked(false);
  };

  const resetFilters = () => {
    setIsAllWarehouseClicked(true);
    setFilterCluster("");
    setFilterCity("");
    setFilterType(""); 
    setSortOption("default");
    setSearchQuery("");
    setMatchingWarehouses([]);
    setSelectedWarehouse(null);
    setShowAutocomplete(true);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    const matchingNames = warehouseData.filter((warehouse) =>
      warehouse.name.toLowerCase().includes(value.toLowerCase())
    );
    setMatchingWarehouses(matchingNames);
    setShowAutocomplete(true);
  };

  const handleAutocompleteItemClick = (warehouse) => {
    setSearchQuery(warehouse.name);
    setSelectedWarehouse(warehouse);
    setShowAutocomplete(false);
  };

  const handleSearchSubmit = () => {
    const matchingWarehouse = warehouseData.find(
      (warehouse) => warehouse.name.toLowerCase() === searchQuery.toLowerCase()
    );

    if (matchingWarehouse) {
      handleAutocompleteItemClick(matchingWarehouse);
    } else {
      console.log("Warehouse not found!");
      setSelectedWarehouse(null);
    }
  };

  return (
    <nav className="Warehousenav">
      <div className="mainSearchbar">
        <input
          className="searchbar"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="SearchbarButton" onClick={handleSearchSubmit}>
          Search
        </button>
        {showAutocomplete && matchingWarehouses.length > 0 && (
          <div className="autocomplete">
            {matchingWarehouses.map((warehouse) => (
              <div
                key={warehouse.id}
                className="autocompleteItem"
                onClick={() => handleAutocompleteItemClick(warehouse)}
              >
                {warehouse.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="navButton" onClick={() => resetFilters()}>
        All Warehouse
      </button>
      <button
        className="navButton"
        onClick={() => setSortOption("space_available_desc")}
      >
        Space Available
      </button>
      <select
        id="clusterSelect"
        className="clusterSelect"
        name="filterCluster"
        onChange={handleFilterChange}
        value={isAllWarehouseClicked ? "" : undefined}
      >
        <option className="clusterOption" value="">
          All Clusters
        </option>
        {clusters.map((cluster) => (
          <option className="clusterOption" key={cluster} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>

      <select
        id="typeSelect"
        className="typeSelect"
        name="filterType"
        onChange={handleFilterChange}
        value={isAllWarehouseClicked ? "" : undefined}
      >
        <option className="typeOption" value="">
          All Types
        </option>
        {types.map((type) => (
          <option className="typeOption" key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        id="citySelect"
        className="citySelect"
        name="filterCity"
        onChange={handleFilterChange}
        value={isAllWarehouseClicked ? "" : undefined}
      >
        <option className="cityOption" value="">
          All Cities
        </option>
        {cities.map((city) => (
          <option className="cityOption" key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default WarehouseNav;


