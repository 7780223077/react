import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ArrayDataBinding2, DataBinding } from './components/DataBinding';
import { JsonDataBinding } from './components/DataBinding';
import { ArrayDataBinding } from './components/DataBinding';
import { FakeStoreAPI } from './components/fakestore/FakeStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FakeStoreAPI/>
    {/* <ArrayDataBinding2/> */}
    {/* <JsonDataBinding/> */}
    {/* <App /> */}
    {/* <DataBinding/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
