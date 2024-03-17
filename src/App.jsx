import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solution" element={<Solution />} />
    </Routes>
  );
};

export default App;
