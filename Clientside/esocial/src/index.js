import React from 'react';


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

