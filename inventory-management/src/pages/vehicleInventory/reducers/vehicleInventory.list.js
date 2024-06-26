import { handleActions } from 'redux-actions';

// Constants
import ACTION_TYPES from '../actions/vehicleInventory.actionTypes';

const INITIAL_STATE = {
  listData: [],
};

const handleSaveListData = (state, action) => {
  return { ...state, listData: action.payload.listData};
};

const handleEditProduct = (state,action) => {
  const updatedListData = [...state.listData];
  updatedListData.splice(action.payload.index,1,action.payload.values); 
  return {...state,listData: updatedListData}
}

const handleDisableProduct = (state,action) => {
  const updatedListData = [...state.listData];
  const listItem = updatedListData[action.payload.index];
  const updatedListItem = {...listItem, disabled: !listItem.disabled};
  updatedListData.splice(action.payload.index,1,updatedListItem); 
  return {...state,listData: updatedListData}

}

const handleDeleteProduct = (state,action)=> {
  const updatedListData = state.listData.filter((_, index) => index !== action.payload.index);
  return {...state, listData: updatedListData};
} 

const ACTION_HANDLERS = {
  [ACTION_TYPES.SAVE_LIST]: handleSaveListData,
  [ACTION_TYPES.EDIT_PRODUCT]: handleEditProduct,
  [ACTION_TYPES.DISABLE_PRODUCT]: handleDisableProduct,
  [ACTION_TYPES.DELETE_PRODUCT]: handleDeleteProduct
};

export default handleActions(ACTION_HANDLERS, INITIAL_STATE);