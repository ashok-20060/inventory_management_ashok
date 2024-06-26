// Components
import InventoryHeader from './components/inventoryHeader/InventoryHeader';
import InventoryList from './components/inventoryList/InventoryList';

// Styles
import styles from './vehicleInventory.module.scss';

const App = () => {
  return (
    <div className={styles.vehicleInventory}>
      <InventoryHeader/>
      <InventoryList/>
    </div>
  );
}

export default App;
