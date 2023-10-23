import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./index.styles";
import { RecordsProvider } from "./contexts/records.context";
import { Reset } from "styled-reset";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecordsProvider>
        <GlobalStyles />
        <Reset />
        <App />
      </RecordsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
