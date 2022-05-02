// created by Ishan Bajaj at 20220502 12:22.
// 
// this is made by me

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import crudStore from './components/store/crudStore';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
      <Provider store={crudStore}>
        <App/>
      </Provider>
  </BrowserRouter>
)

