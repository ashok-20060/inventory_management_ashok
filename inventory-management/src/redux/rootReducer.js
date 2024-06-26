import { combineReducers } from 'redux';

// Reducers
import vehicelInventoryListReducer from '../pages/vehicleInventory/reducers/vehicleInventory.list';
import vehicelInventoryViewReducer from '../pages/vehicleInventory/reducers/vehicleInventory.view';

const rootReducer = combineReducers({
  list: vehicelInventoryListReducer,
  view: vehicelInventoryViewReducer,
});

export default rootReducer;
