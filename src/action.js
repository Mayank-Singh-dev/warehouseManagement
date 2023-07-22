
import warehouseData from './components/warehouse.json'; 

export const loadWarehouseData = () => ({
  type: 'LOAD_WAREHOUSE_DATA',
  payload: warehouseData,
});

export const updateWarehouseData = (data) => ({
  type: 'UPDATE_WAREHOUSE_DATA',
  payload: data,
});
