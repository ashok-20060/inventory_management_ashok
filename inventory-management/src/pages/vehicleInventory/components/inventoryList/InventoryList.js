import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

// Components
import InventoryStats from './components/inventoryStats/InventoryStats';
import InventoryListTable from './components/inventoryListTable/InventoryListTable';

// Helpers
import { fetchListData } from './inventoryList.helper';

// Styles
import styles from "./inventoryList.module.scss";

const InventoryList = () => {
    const [ isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=> {
    fetchListData(dispatch, setIsLoading);
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

return isLoading ? (<div>Loading data..</div>): (
    <div className={styles.inventoryList}>
      <div className={styles.heading}>Inventory stats</div>
      <InventoryStats/>
      <InventoryListTable/>
    </div>
  );
};

export default InventoryList;
