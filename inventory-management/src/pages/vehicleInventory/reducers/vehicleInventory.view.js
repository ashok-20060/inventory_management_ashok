import { handleActions } from 'redux-actions';

// Constants
import ACTION_TYPES from '../actions/vehicleInventory.actionTypes';

const INITIAL_STATE = {
  isUser: false,
};

const handleChangeView = state => ({
  ...state,isUser: !state.isUser,
});

const ACTION_HANDLERS = {
  [ACTION_TYPES.CHANGE_VIEW]: handleChangeView,
};

export default handleActions(ACTION_HANDLERS, INITIAL_STATE);
