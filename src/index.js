import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./index.styles";
import { RecordsProvider } from "./contexts/records.context";
import { AlertProvider } from "./contexts/alert.context";
import AlertMessage from "./components/alert/alert-message.component";
import { Reset } from "styled-reset";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <AlertProvider>
      <RecordsProvider>
        <GlobalStyles />
        <Reset />
        <App />
        <AlertMessage />
      </RecordsProvider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);
