import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Импортируем хранилище Redux
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="marvel-portal">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);