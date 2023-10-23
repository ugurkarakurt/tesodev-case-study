import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import List from "./routes/list/list.component";
// import PrivateRoute from "./routes/private-route/private-route.component";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
};

export default App;