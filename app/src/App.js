import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LaSolideAir from "./pages/LaSolideAir.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Lasolideair" element={<LaSolideAir />} />
    </Routes>
  );
}

export default App;
