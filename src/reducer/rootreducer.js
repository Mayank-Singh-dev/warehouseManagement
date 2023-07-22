
import { combineReducers } from 'redux';
import warehouseReducer from './reducer'; 

const rootReducer = combineReducers({
  warehouse: warehouseReducer, 
});

export default rootReducer;