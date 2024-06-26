import React from "react";
import { useSelector } from "react-redux";

// Helpers
import { getStats, getTotalStats } from './inventoryStats.helper';

// Styles
import styles from "./inventoryStats.module.scss";

const InventoryStats = () => {
  const { totalProducts, totalStoreValue, outOfStocks, noOfCategory } = useSelector((state) =>  getTotalStats(state.list.listData));

  const stats = getStats({
    totalProducts,
    totalStoreValue,
    outOfStocks,
    noOfCategory,
  });
  return (
    <div className={styles.statList}>
      {stats.map((stat) => {
        return (
          <div key={stat.label} className={styles.statCard}>
            <div className={styles.statCardLabel}>{stat.label}</div>
            <div className={styles.statCardValue}>{stat.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default InventoryStats;
