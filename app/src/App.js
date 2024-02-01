import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaSolideAir from "./pages/LaSolideAir";
import LaVioque from "./pages/LaVioque";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lasolideair" element={<LaSolideAir />} />
        <Route path="/lavioque" element={<LaVioque />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
