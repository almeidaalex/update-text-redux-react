import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './my-store';
import { Provider } from 'react-redux-7';

const root = document.getElementById("root");

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>, 
  root
);



