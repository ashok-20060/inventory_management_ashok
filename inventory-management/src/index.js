import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

// Styles
import './index.css';

// Components
import VehicleInventoryApp from './pages/vehicleInventory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <VehicleInventoryApp />
    </Provider>
  </React.StrictMode>
);
