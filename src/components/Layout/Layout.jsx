import React from "react";
import Navbar from "../../components/Navbar";
import HomeBottomComp from "../HomeBottomComp";
import Footer from "../../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-auto">
      <div className="h-[87px] border border-red-500">
        <Navbar />
      </div>
      <div className="w-full h-auto">{children}</div>
      <div>
        <HomeBottomComp />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
