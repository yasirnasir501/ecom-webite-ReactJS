import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filter_Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <App />
      </FilterContextProvider>
    
  </AppProvider>
);