import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import BookDemo from "./pages/BookDemo";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/book-demo" element={<BookDemo />} />
    </Routes>
  );
};

export default App;
