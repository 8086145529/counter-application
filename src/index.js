import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ee Provider selectoril enth koduthalum ath ee projectile ella componentsinum access cheyan pattum like we give the store here */}
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>
);

