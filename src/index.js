import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RowndProvider } from '@rownd/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RowndProvider
    appKey="key_gbb97x3pfzxusc0ow9vlfpnv"
  >
    <App />
  </RowndProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
