
import { createStore } from 'redux';
import rootReducer from './reducer/rootreducer';
import { loadWarehouseData } from './action';

const store = createStore(rootReducer);

store.dispatch(loadWarehouseData());

export default store;
