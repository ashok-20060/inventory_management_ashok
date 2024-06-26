import React, { useCallback,  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "antd";

// Constants
import ACTION_TYPES from '../../actions/vehicleInventory.actionTypes';

// Styles
import styles from './inventoryHeader.module.scss';

const InventoryHeader = () => {
    const isUserView= useSelector(state => state.view.isUser);
    const dispatch = useDispatch();
    const handleViewChange = useCallback(() => dispatch({type: ACTION_TYPES.CHANGE_VIEW}),[dispatch])
  return (
    <div className={styles.header}>
      <span>admin</span>
      <Switch className={styles.switch} defaultChecked={isUserView} onChange={handleViewChange} />
      <span>user</span>
    </div>
  );
};

export default InventoryHeader;
