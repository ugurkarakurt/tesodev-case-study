import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import List from "./routes/list/list.component";
import Add from "./routes/add/add.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
};

export default App;