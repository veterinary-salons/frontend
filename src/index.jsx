import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index';
import './assets/scss/fonts/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
