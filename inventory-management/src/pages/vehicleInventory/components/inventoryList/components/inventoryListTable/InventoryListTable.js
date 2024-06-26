import React, { useState } from "react";
import { useSelector } from "react-redux";

// Components
import Actions from "./Actions";
import InventoryEditModal from "./InventoryEditModal";

// Styles
import styles from "./inventoryListTable.module.scss";

const InventoryListTable = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [rowIndex, setRowIndex] = useState(-1);
  const [productValues, setProductValues] = useState({});
  const inventoryList = useSelector((state) => state.list.listData);
  const isUserView= useSelector(state => state.view.isUser);

  return (
    <div className={styles.table}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            <th className={styles.firstColumnHeader}>
              <span className={styles.headerName}>Name</span>
            </th>
            <th className={styles.columnHeader}>
              <span className={styles.headerName}>Category</span>
            </th>
            <th className={styles.columnHeader}>
              <span className={styles.headerName}>Price</span>
            </th>
            <th className={styles.columnHeader}>
              <span className={styles.headerName}>Quantity</span>
            </th>
            <th className={styles.columnHeader}>
              <span className={styles.headerName}>Value</span>
            </th>
            <th className={styles.columnHeader}>
              <span className={styles.headerName}>Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {inventoryList.map((listItem, index) => {
            return (
              <tr key={listItem.id} className={styles.tableRow}>
                <td className={`${styles.firstColumnHeader} ${listItem.disabled ? styles.disabledBtn : ''}`} >{listItem.name}</td>
                <td className={`${styles.columnHeader} ${listItem.disabled ? styles.disabledBtn : ''}`}>{listItem.category}</td>
                <td className={`${styles.columnHeader} ${listItem.disabled ? styles.disabledBtn : ''}`}>{listItem.price}</td>
                <td className={`${styles.columnHeader} ${listItem.disabled ? styles.disabledBtn : ''}`}>{listItem.quantity}</td>
                <td className={`${styles.columnHeader} ${listItem.disabled ? styles.disabledBtn : ''}`}>{listItem.value}</td>
                <td className={styles.columnHeader}>
                  <Actions
                    setModalVisible={setModalVisible}
                    setProductValues={setProductValues}
                    setRowIndex={setRowIndex}
                    rowData={listItem}
                    index={index}
                    isUserView={isUserView}
                    isEditDisabled={listItem.disabled}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <InventoryEditModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        productValues={productValues}
        rowIndex={rowIndex}
      />
    </div>
  );
};

export default InventoryListTable;
