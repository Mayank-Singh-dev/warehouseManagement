import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateWarehouseData, loadWarehouseData } from "../../action";
import "./WarehouseDetails.css";

const WarehouseDetails = () => {
  const { warehouseId } = useParams();
  const id = Number(warehouseId);

  const warehouseData = useSelector((state) => state.warehouse.warehouseData);

  const warehouse = warehouseData.find((warehouse) => warehouse.id === id);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState(warehouse || {});

  useEffect(() => {
    if (!warehouse) {
      dispatch(loadWarehouseData());
    } else {
      setEditableData({ ...warehouse });
    }
  }, [dispatch, warehouse, warehouseData]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedWarehouseData = warehouseData.map((item) =>
      item.id === id ? { ...editableData } : item
    );

    dispatch(updateWarehouseData(updatedWarehouseData));

    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    const isCheckbox = type === "checkbox";
    const newValue = isCheckbox ? event.target.checked : value;

    setEditableData((prevData) => ({
      ...prevData,
      [name]: isCheckbox ? newValue : value,
    }));
  };

  const uniqueCities = [
    ...new Set(warehouseData.map((warehouse) => warehouse.city)),
  ];
  const uniqueClusters = [
    ...new Set(warehouseData.map((warehouse) => warehouse.cluster)),
  ];
  const uniqueTypes = [
    ...new Set(warehouseData.map((warehouse) => warehouse.type)),
  ];

  return (
    <div className="deta">
      {isEditing ? (
        <div className="Datas">
          <table className="editTable">
            <tbody>
              <tr>
                <td className="EditableHead">Name:</td>
                <td className="Editedbox">
                  <input
                    className="EditedInput"
                    type="text"
                    name="name"
                    value={editableData.name}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="EditableHead">Warehouse Code:</td>
                <td className="Editedbox">
                  <input
                    className="EditedInput"
                    type="text"
                    name="code"
                    value={editableData.code}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="EditableHead">City:</td>
                <td className="Editedbox">
                  <select
                    className="EditedInput"
                    name="city"
                    value={editableData.city}
                    onChange={handleInputChange}
                  >
                    {uniqueCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="EditableHead">Space Available:</td>
                <td className="Editedbox">
                  <input
                    className="EditedInput"
                    type="number"
                    name="space_available"
                    value={editableData.space_available}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="EditableHead">Type:</td>
                <td className="Editedbox">
                  <select
                    className="EditedInput"
                    name="type"
                    value={editableData.type}
                    onChange={handleInputChange}
                  >
                    {uniqueTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="EditableHead">Cluster:</td>
                <td className="Editedbox">
                  <select
                    className="EditedInput"
                    name="cluster"
                    value={editableData.cluster}
                    onChange={handleInputChange}
                  >
                    {uniqueClusters.map((cluster) => (
                      <option key={cluster} value={cluster}>
                        {cluster}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="EditableHead">Is Registered:</td>
                <td className="Editedbox">
                  <input
                    className="EditableRadio"
                    type="radio"
                    name="is_registered"
                    value="Yes"
                    checked={editableData.is_registered === true}
                    onChange={handleInputChange}
                  />
                  <span>Yes</span>
                  <input
                    className="EditableRadio"
                    type="radio"
                    name="is_registered"
                    value="No"
                    checked={editableData.is_registered === false}
                    onChange={handleInputChange}
                  />
                  <span>No</span>
                </td>
              </tr>
              <tr>
                <td className="EditableHead">Is Live:</td>
                <td className="Editedbox">
                  <input
                    className="EditableRadio"
                    type="radio"
                    name="is_live"
                    value="Yes"
                    checked={editableData.is_live === true}
                    onChange={handleInputChange}
                  />
                  <span>Yes</span>
                  <input
                    className="EditableRadio"
                    type="radio"
                    name="is_live"
                    value="No"
                    checked={editableData.is_live === false}
                    onChange={handleInputChange}
                  />
                  <span>No</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="SaveDetails" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div className="EditData">
          <table>
            <tbody>
              <tr>
                <td className="EditableHead">Name:</td>
                <td className="EditableDetails">{warehouse.name}</td>
              </tr>
              <tr>
                <td className="EditableHead">Warehouse Code:</td>
                <td className="EditableDetails">{warehouse.code}</td>
              </tr>
              <tr>
                <td className="EditableHead">City:</td>
                <td className="EditableDetails">{warehouse.city}</td>
              </tr>
              <tr>
                <td className="EditableHead">Space Available:</td>
                <td className="EditableDetails">{warehouse.space_available}</td>
              </tr>
              <tr>
                <td className="EditableHead">Type:</td>
                <td className="EditableDetails">{warehouse.type}</td>
              </tr>
              <tr>
                <td className="EditableHead">Cluster:</td>
                <td className="EditableDetails">{warehouse.cluster}</td>
              </tr>
              <tr>
                <td className="EditableHead">Is Registered:</td>
                <td className="EditableDetails">
                  {warehouse.is_registered ? "Yes" : "No"}
                </td>
              </tr>
              <tr>
                <td className="EditableHead">Is Live:</td>
                <td className="EditableDetails">
                  {warehouse.is_live ? "Yes" : "No"}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="EditinfoDetails" onClick={handleEdit}>
            Edit Info
          </button>
        </div>
      )}
    </div>
  );
};

export default WarehouseDetails;
