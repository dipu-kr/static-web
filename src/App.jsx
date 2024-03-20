import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Solution from "./pages/Solution";
import ContactUs from "./pages/ContactUs";
import Pricing from "./pages/Pricing";
import BookDemo from "./pages/BookDemo";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
